const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

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
  address: {
    type: String,
    required: [true, 'Please add a address'],
    maxlength: [100, 'Address can not be more than 100 characters']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [400, 'Description can not be more than 400 characters']
  },
  rating: {
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
  website: {
    type: String,
    required: [true, 'Please add a website address'],
    maxlength: [400, 'Website address can not be more than 400 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

async function geocode(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].latitude, loc[0].longitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  };

  this.address = undefined;
  next();
}

async function populateJobs(next) {
  this.populate('jobs', ['position']);
  next();
}

CompanySchema.pre('save', geocode);
CompanySchema.pre('find', populateJobs);
CompanySchema.pre('findOne', populateJobs);

module.exports = mongoose.model('Company', CompanySchema);
