from langchain.vectorstores.chroma import Chroma # Importing Chroma vector store from Langchain
from langchain_openai import OpenAIEmbeddings
from utils.doc_retriever import DocRetriever
import chromadb

chroma_path = "/home/ubuntu/LibreChat/utils/vector/chroma" # TODO: set endpoint instead of path
default_top_docs = 5

class ChromaRetriever(DocRetriever):
    def __init__(self, api_key: str, base_url: str = None, model: str = "text-embedding-ada-002") -> None:
        self.model= model
        self.api_key = api_key
        self.base_url = base_url

    # Retrieves the document
    def retrieve(self, message_text: str, top_docs: int = None, threshold = 0): # TODO: Set embed_model and Chroma endpoint in environment
        chroma_client = chromadb.HttpClient(host='10.0.20.23', port=8000)

        embedding_function = OpenAIEmbeddings(api_key=self.api_key)

        # Prepare the database
        db = Chroma(client=chroma_client, embedding_function=embedding_function)
        
        # Retrieving the context from the DB using similarity search
        results = db.similarity_search_with_relevance_scores(message_text, k=top_docs if top_docs else default_top_docs)

        print("RESULTS: ", results)

        # Fileter documents if the relevance score is below the threshold
        documents = [doc.page_content for i, (doc, score) in enumerate(results) if score >= threshold]

        return documents


        