// routes/prediction.js
const express = require('express');
const router = express.Router();

// Dummy prediction function (you can implement your own logic here)
router.post('/', (req, res) => {
  const { temperature, cloudCover, pollutionIndex } = req.body;
  
  // A simple formula for predicting radiation (you can modify this as needed)
  const prediction = (temperature * 0.5) + (cloudCover * 0.3) + (pollutionIndex * 0.2);
  
  res.status(200).json({ predictedRadiation: prediction.toFixed(2) });
});

module.exports = router;
