const express = require('express');
const { getPrediction } = require('../controllers/predictController');

const router = express.Router();

// POST /api/predict
router.post('/', getPrediction);

module.exports = router;
