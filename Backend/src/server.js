const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected')).catch(err => console.error(err));

// Import routes
const predictRoutes = require('./routes/predict');
const uploadRoutes = require('./routes/upload');
const predictionRoutes = require('./routes/predictions');

// Use routes
app.use('/api/predict', predictRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/predictions', predictionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
