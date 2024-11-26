const { callMLModel } = require('../services/mlService');

// Controller for prediction
const getPrediction = async (req, res) => {
  const { temperature, cloudCover, pollutionIndex } = req.body;

  // Validate inputs
  if (!temperature || !cloudCover || !pollutionIndex) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Call ML model service
    const prediction = await callMLModel({ temperature, cloudCover, pollutionIndex });
    return res.status(200).json(prediction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get prediction' });
  }
};

module.exports = { getPrediction };
