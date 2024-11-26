const axios = require('axios');

// Service to call the ML model
const callMLModel = async (inputData) => {
  try {
    const response = await axios.post('http://localhost:8000/predict', inputData);
    return response.data;
  } catch (error) {
    throw new Error('Error connecting to the ML model');
  }
};

module.exports = { callMLModel };
