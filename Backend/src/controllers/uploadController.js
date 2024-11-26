const File = require('../models/File');

// Controller for file upload
const handleFileUpload = async (req, res) => {
  const { file } = req;
  const { description, uploadDate } = req.body;

  if (!file) {
    return res.status(400).json({ error: 'File is required' });
  }

  try {
    // Save file metadata to database
    const newFile = new File({
      filename: file.filename,
      path: file.path,
      description,
      uploadDate,
    });
    await newFile.save();

    res.status(200).json({ message: 'File uploaded successfully', file: newFile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'File upload failed' });
  }
};

module.exports = { handleFileUpload };
