// const axios = require('axios');
// export const tResultSchema = z.object({
//     name: z.string(),
//     score: z.number(),
//   });
  
//   export type TResult = z.infer<typeof tPluginSchema>;

/**
 * Filters out duplicate plugins from the list of plugins.
 *
 * @param {TResult[]} plugins The list of plugins to filter.
 * @returns {TResult[]} The list of plugins with duplicates removed.
 */
const getTrustAssessmentController = async (req, res) => {
//   try {
//     const response = await axios.get('https://your-endpoint.com/api/trust-data');
//     if (response.data) {
//       res.status(200).json(response.data);
//       return;
//     }
//     res.status(404).json({ message: 'No data found' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }


    // Delete the following lines:
    // Return the following string: "45%"
    // Return TResult json with name = "Test" and score = 45
    // results = [{ name: 'Test', score: 45 }, { name: 'Test 1', score: 45 }, { name: 'Test 2', score: 45 }, { name: 'Test 3', score: 45 }, { name: 'Test 4', score: 45 }, { name: 'Test 5', score: 45 }, { name: 'Test 6', score: 45 }, { name: 'Test 7', score: 45 }, { name: 'Test 8', score: 45 }, { name: 'Test 9', score: 45 }];
    // Set the results with scores of decimal numbers beween 0 and 1 and make each score unique and spread them out randomly between 0 and 1
    // results = [{ name: 'Test', score: 0.45 }, { name: 'Test 1', score: 0.23 }, { name: 'Test 2', score: 0.67 }, { name: 'Test 3', score: 0.12 }, { name: 'Test 4', score: 0.98 }, { name: 'Test 5', score: 0.34 }, { name: 'Test 6', score: 0.56 }, { name: 'Test 7', score: 0.78 }, { name: 'Test 8', score: 0.89 }, { name: 'Test 9', score: 0.45 }];

    // // Rewrite results so it uses the name as a column and the score as its value. Also, add a column called time with a value of the current time.
    // results = results.map((result) => {
    //     return { name: result.name, score: result.score, time: new Date().toISOString() };
    // });

    // assessments = [{time: new Date().toISOString(), results: [0.45, 0.23, 0.67, 0.12, 0.98, 0.34, 0.56, 0.78, 0.89, 0.45]}];
    // // Create increment assessment to 50 items
    // for (let i = 0; i < 50; i++) {
    //     assessments.push({time: new Date().toISOString(), results: [0.45, 0.23, 0.67, 0.12, 0.98, 0.34, 0.56, 0.78, 0.89, 0.45]});
    // }

    // Rewrite the above loop but make the results random and the time random and readable
    assessments = [];
    for (let i = 0; i < 50; i++) {
        let results = [];
        for (let j = 0; j < 10; j++) {
            results.push(Math.random());
        }
        assessments.push({time: new Date().toISOString(), results: results});
    }
    
    res.status(200).json({ model: 'myModel', avgScore: 45, tests: ['Test', 'Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9'], assessments: assessments});
};

module.exports = {
    getTrustAssessmentController,
};