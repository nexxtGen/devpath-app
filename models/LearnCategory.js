const mongoose = require('mongoose');

const LearnCategorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [30, 'Category name can not be more than 50 characters']
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LearnItem',
      required: true
    }
  ],
  image: {
    type: String,
    required: [true, 'Please add a image link']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

async function populateCategory(next) {
  this.populate('items');
  next();
}

CompanySchema.pre('find', populateCategory);
CompanySchema.pre('findOne', populateCategory);

module.exports = mongoose.model('LearnCategory', LearnCategorySchema);
