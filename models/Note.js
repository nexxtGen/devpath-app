const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please add a note description'],
    trim: true,
    maxlength: [250, 'Note name can not be more than 250 characters']
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  image: {
    type: String,
    maxlength: [900, 'Image can not be more than 900 characters']
  },
  setProgress: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number
  },
  steps: {
    type: Number
  },
  collectionId: {
    type: String,
    required: true
  },
  boardId: {
    type: String,
    required: true
  },
  laneId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
