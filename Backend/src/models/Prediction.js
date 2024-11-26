const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  temperature: Number,
  cloudCover: Number,
  pollutionIndex: Number,
  radiationLevel: Number,
  recommendation: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Prediction', predictionSchema);
