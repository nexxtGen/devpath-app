const mongoose = require('mongoose');

const KanbanCollectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a collection name'],
    trim: true,
    maxlength: [50, 'Collection name can not be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  type: {
    type: String,
    required: [true, 'Select Collection/kategory title'],
    enum: ['project', 'work', 'life', 'study', 'private']
  },
  image: {
    type: String,
    required: [true, 'Please add a image link']
  },
  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board',
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('KanbanCollection', KanbanCollectionSchema);
