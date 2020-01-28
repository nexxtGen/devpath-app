const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  code: {
    type: String,
    required: [true, 'Please add a code'],
    maxlength: [500, 'Code can not be more than 500 characters']
  },
  category: {
    type: [String],
    required: true,
    enum: [
      'Javascript',
      'React',
      'Angular',
      'HTML',
      'CSS',
      'LESS/SASS',
      'MongoDB',
      'Node',
      'Other'
    ]
  },
  archived: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
