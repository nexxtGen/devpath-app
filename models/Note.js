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
  progress: {
    steps: {
      type: Number,
      min: [2, 'Progress must be at least 2'],
      max: [6, 'Progress value must can not be more than 6']
    },
    currentValue: {
      type: Number,
      min: [0, 'Progress must be at least 2'],
      max: [6, 'Progress value must can not be more than 6']
    }
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
