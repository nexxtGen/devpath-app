const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Company name can not be more than 50 characters']
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true
    }
  ],
  country: {
    type: String,
    required: [true, 'Please add a Country'],
    maxlength: [20, 'Country can not be more than 20 characters']
  },
  localization: {
    type: String,
    required: [true, 'Please add a localization'],
    maxlength: [60, 'City can not be more than 60 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  interesting: {
    type: Number,
    required: [true, 'Please set interesting value'],
    min: [1, 'Interesting value rating must be at least 1'],
    max: [5, 'Interesting value must can not be more than 5']
  },
  size: {
    type: String,
    required: [true, 'Select company size'],
    enum: ['Small', 'Medium', 'Big']
  },
  logo: {
    type: String,
    required: [true, 'Please add a logo link']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/*
async function populateJobs(next) {
  this.populate('jobs', ['position']);
  next();
}

CompanySchema.pre('find', populateJobs);
CompanySchema.pre('findOne', populateJobs);
*/
module.exports = mongoose.model('Company', CompanySchema);
