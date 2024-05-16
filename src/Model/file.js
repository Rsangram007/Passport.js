const mongoose = require('mongoose');

const File = mongoose.model(
  'File',
  new mongoose.Schema({
    filename: String,
    contentType: String,
    size: Number,
    data: Buffer,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
);

module.exports = File;
