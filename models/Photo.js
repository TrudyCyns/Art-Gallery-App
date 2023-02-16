const mongoose = require('mongoose');
const photoSchema = new mongoose.Schema({
  Title: {
    type: String,
    trim: true,
    required: [true, 'A photo must have a title'],
  },
  Description: {
    type: String,
    trim: true,
  },
  photoUrl: {
    type: String,
    trim: true,
    required: [true, 'A photo must have a url'],
  },
  uploadedBy: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Photo', photoSchema);
