const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  position: {
    type: String,
    required: [true, 'Please add a position'],
    trim: true,
    maxlength: [40, 'Position can not be more than 40 characters']
  },
  companyId: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: [true, 'Please add a City'],
    trim: true,
    maxlength: [40, 'City name can not be more than 40 characters']
  },
  technologies: {
    type: [String],
    required: true
  },
  level: {
    type: String,
    required: true,
    enum: ['Trainee', 'Junior', 'Mid', 'Senior', 'Expert']
  },
  rating: {
    type: Number,
    min: [1, 'Value rating must be at least 1'],
    max: [10, 'Value rating must can not be more than 10']
  },
  comment: {
    type: String,
    maxlength: [300, 'Comment can not be more than 300 characters']
  },
  pros: {
    type: String,
    maxlength: [300, 'Pros can not be more than 300 characters']
  },
  cons: {
    type: String,
    maxlength: [300, 'Pros can not be more than 300 characters']
  },
  applied: {
    type: Boolean,
    default: false
  },
  agreement: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
