const axios = require('axios');

// Function to convert camel case to readable format with spaces and capitalize the first letter of each word
const convertCamelCaseToReadable = (camelCase) => {
    return camelCase
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
        // Optional: Capitalize first letter of each word
        .split(' ') // Split words by space
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back with space
};

/**
 * Retrieves trust assessment data for the given endpoint and returns it in a formatted way.
 *
 * @param {str} endpoint Receives get request with the endpoint as an argument.
 * @returns {TResult} The assessment data of the models. 
 */
const getTrustAssessmentController = async (req, res) => {
    // try {

        // Extract endpoint from the query parameter in the GET request
        // const { endpoint } = req.query;

        // // Check if the endpoint is provided
        // if (!endpoint) {
        //     return res.status(400).json({ message: 'Endpoint is required' });
        // }

        // // Send POST request to the evaluation endpoint with the extracted endpoint
        // const response = await axios.post('http://10.0.20.239:8080/evaluate/all', {
        //     model_name: "NousResearch/Meta-Llama-3-8B-Instruct",
        //     endpoint: endpoint // Use the endpoint from the request query
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // if (response.data && response.data.results) {
        //     const results = response.data.results;

        //     // Extract column names dynamically from the keys of results object
        //     const columns = Object.keys(results).map(convertCamelCaseToReadable);

        //     // Extract values dynamically
        //     const values = [Object.values(results)];

        //     // Return formatted data
        //     res.status(200).json({ columns, values });
        //     return;
        // }
        let values = [
            {
                "Model Name": "General Model",
                "Endpoint": "SafeAI",
                "Model Version": "v1",
                "Assessment Version": "v1",
                "Avg Score": 0.85,      // Average score on performance or evaluation metric
                "Robustness": 0.90,    // Model's ability to handle variability or noise
                "Privacy": 0.88,       // Privacy rating or compliance
                "Ethics": 0.92,        // Ethical consideration score
                "Fairness": 0.87,      // Fairness in terms of unbiased predictions
                "Truthfulness": 0.89,  // Alignment with accurate/true outputs
                "Safety": 0.91         // Safe operation, minimizing harmful outputs
            },
            {
                "Model Name": "Medical Model",
                "Endpoint": "SafeAI",
                "Model Version": "v2",
                "Assessment Version": "v1.1",
                "Avg Score": 0.88,
                "Robustness": 0.93,
                "Privacy": 0.90,
                "Ethics": 0.94,
                "Fairness": 0.89,
                "Truthfulness": 0.91,
                "Safety": 0.92
            },
            {
                "Model Name": "Advanced Model",
                "Endpoint": "SafeAI",
                "Model Version": "v3",
                "Assessment Version": "v2",
                "Avg Score": 0.90,
                "Robustness": 0.95,
                "Privacy": 0.92,
                "Ethics": 0.96,
                "Fairness": 0.90,
                "Truthfulness": 0.93,
                "Safety": 0.94
            }
        ];
        
        let columns = [
            "Model Name",
            "Endpoint",
            "Model Version",
            "Assessment Version",
            "Avg Score",
            "Robustness",
            "Privacy",
            "Ethics",
            "Fairness",
            "Truthfulness",
            "Safety"
        ];
        

        res.status(200).json({ columns, values });
        return; 

        // res.status(404).json({ message: 'No data found' });
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
};

module.exports = {
  getTrustAssessmentController,
};
