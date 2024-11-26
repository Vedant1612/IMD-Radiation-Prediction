const Prediction = require('../models/Prediction');

// Fetch all predictions
const getAllPredictions = async (req, res) => {
  try {
    const predictions = await Prediction.find();
    res.status(200).json(predictions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch predictions' });
  }
};

module.exports = { getAllPredictions };
