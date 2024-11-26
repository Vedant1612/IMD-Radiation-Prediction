const express = require('express');
const multer = require('multer');
const { handleFileUpload } = require('../controllers/uploadController');

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST /api/upload
router.post('/', upload.single('file'), handleFileUpload);

module.exports = router;
