const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  status: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
