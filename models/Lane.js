const mongoose = require('mongoose');

const LaneSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a lane name'],
    trim: true,
    maxlength: [50, 'Lane name can not be more than 50 characters']
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note',
      required: true
    }
  ],
  boardId: {
    type: String,
    required: true
  },
  collectionId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lane', LaneSchema);
