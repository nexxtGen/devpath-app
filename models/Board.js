const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a board name'],
    trim: true,
    maxlength: [50, 'Board name can not be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add a image link']
  },
  lanes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lane',
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Board', BoardSchema);
