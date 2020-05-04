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
  technologies: {
    type: String,
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
  source: {
    type: String,
    maxlength: [800, 'Comment can not be more than 800 characters']
  },
  pros: {
    type: String,
    maxlength: [150, 'Pros can not be more than 150 characters'],
    default: ''
  },
  cons: {
    type: String,
    maxlength: [150, 'Pros can not be more than 150 characters'],
    default: ''
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

JobSchema.pre('save', geocode);

module.exports = mongoose.model('Job', JobSchema);
