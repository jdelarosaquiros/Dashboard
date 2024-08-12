from litellm.integrations.custom_logger import CustomLogger
import litellm
from litellm.proxy.proxy_server import UserAPIKeyAuth, DualCache
from typing import Optional, Literal
from utils.doc_retriever import DocRetriever
from utils.chroma_retriever import ChromaRetriever
import json

# Use these functions to dynamically limit the number of documents
def estimate_token_count(text, avg_token_length = 5):
    """
    Estimate the number of tokens in a text without tokenizing it.
    
    :param text: The input text string
    :param avg_token_length: The average length of a token (default is 5)
    :return: Estimated number of tokens
    """
    num_characters = len(text)
    estimated_tokens = num_characters / avg_token_length
    return estimated_tokens

def select_documents_within_token_limit(documents, max_tokens, avg_token_length = 5):
    """
    Select documents to include in the prompt without exceeding the maximum token limit.
    
    :param documents: List of document strings
    :param max_tokens: Maximum token limit of the model
    :param avg_token_length: Average length of a token (default is 5)
    :return: List of selected documents
    """
    selected_documents = []
    current_token_count = 0

    for document in documents:
        estimated_tokens = estimate_token_count(document, avg_token_length)
        if current_token_count + estimated_tokens <= max_tokens:
            selected_documents.append(document)
            current_token_count += estimated_tokens
        else:
            break

    return selected_documents

# Constructs retriever from provided data
def get_retriever_from_json(data: dict) -> DocRetriever:
    name = data.get("vector_db")

    if name == "chroma":
        return ChromaRetriever(api_key = data.get("embed_api_key"), base_url = data.get("base_url"), model = data.get("embed_model"))
    
    return None

documents_prompt_template = '''
You are an expert assistance extracting information from context provided. Answer the prompt based on the Documents. Be concise and do not hallucinate. If you don't have the information, say so.
Documents:
{docs}
'''

def format_documents_prompt(documents: list):
    docs = [f"{i}. {doc}" for i, doc in enumerate(documents)]

    return documents_prompt_template.format(docs = "\n".join(docs))

# This file includes the custom callbacks for LiteLLM Proxy
# Once defined, these can be passed in proxy_config.yaml
class MyCustomHandler(CustomLogger): # https://docs.litellm.ai/docs/observability/custom_callback#callback-class
    # Class variables or attributes
    def __init__(self):
        pass

    #### CALL HOOKS - proxy only #### 

    async def async_pre_call_hook(self, user_api_key_dict: UserAPIKeyAuth, cache: DualCache, data: dict, call_type: Literal[
            "completion",
            "text_completion",
            "embeddings",
            "image_generation",
            "moderation",
            "audio_transcription",
        ]): 
        # data['messages'][-1]["content"][0]["text"] = "Hi"
        # data.pop("extra_body")
        # raise ValueError(f"LLM REQUEST:\n{data}")



        message_data: dict = data.get("messages")[-1] if len(data.get("messages")) > 0 else None

        if data.get("rag") and message_data:
            rag_config = data.get("rag")
            message_text = message_data.get("content")[0]["text"]
            retriever = get_retriever_from_json(rag_config)
            if not retriever:
                raise ValueError("Invalid vector database name.")

            documents = retriever.retrieve(message_text = message_text, top_docs = rag_config.get("top_docs"), threshold = 0.5)
            print(f"Top Document: {documents[0]}")
            # raise ValueError(f"Retrieved Documents: {documents}")

            data['messages'][-1]["content"][0]["text"] = format_documents_prompt(documents) + message_text
            data.pop("rag")
            
        return data

    async def async_post_call_failure_hook(
        self, original_exception: Exception, user_api_key_dict: UserAPIKeyAuth
    ):
        pass

    async def async_post_call_success_hook(
        self,
        user_api_key_dict: UserAPIKeyAuth,
        response,
    ):
        pass

    async def async_moderation_hook( # call made in parallel to llm api call
        self,
        data: dict,
        user_api_key_dict: UserAPIKeyAuth,
        call_type: Literal["completion", "embeddings", "image_generation"],
    ):
        pass

    async def async_post_call_streaming_hook(
        self,
        user_api_key_dict: UserAPIKeyAuth,
        response: str,
    ):
        pass

proxy_handler_instance = MyCustomHandler()