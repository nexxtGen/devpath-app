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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
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
    required: [true, 'Please add required technologies']
  },
  level: {
    type: String,
    required: true,
    enum: ['Trainee', 'Junior', 'Mid', 'Senior', 'Expert']
  },
  rating: {
    type: Number,
    required: [true, 'Please set rating'],
    min: [1, 'Value rating must be at least 1'],
    max: [5, 'Value rating must can not be more than 5']
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
    type: String,
    maxlength: [20, 'Agreement can not be more than 20 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

async function populateCompany(next) {
  this.populate('companyId');
  next();
}

JobSchema.pre('find', populateCompany);
JobSchema.pre('findOne', populateCompany);

module.exports = mongoose.model('Job', JobSchema);
