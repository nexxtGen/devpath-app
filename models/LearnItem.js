const mongoose = require('mongoose');

const LearnItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters']
  },
  type: {
    type: String,
    required: true,
    enum: ['article', 'tutorial', 'other']
  },
  image: {
    type: String,
    minlength: [8, 'Image link  must be at least 8'],
    maxlength: [900, 'Image link can not be more than 900 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  link: {
    type: String,
    required: [true, 'Please add a link'],
    maxlength: [900, 'Link can not be more than 900 characters']
  },
  sourcename: {
    type: String,
    required: [true, 'Please add a source Name'],
    maxlength: [80, 'Source name can not be more than 80 characters']
  },
  published: {
    type: Date
  },
  progress: {
    type: Number,
    min: [0, 'Progress must be at least 0'],
    max: [100, 'Progress must can not be more than 100']
  },
  categoryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('LearnItem', LearnItemSchema);
