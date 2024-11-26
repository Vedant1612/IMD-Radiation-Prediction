const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  description: String,
  uploadDate: Date,
});

module.exports = mongoose.model('File', fileSchema);
