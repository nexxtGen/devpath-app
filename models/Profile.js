const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  profession: {
    type: String,
    required: [true, 'Please add a profession']
  },
  website: {
    type: String
  },
  company: {
    type: String
  },
  country: {
    type: String,
    required: [true, 'Please add a country']
  },
  location: {
    type: String
  },
  usernameservices: {
    github: {
      type: String
    },
    codewars: {
      type: String
    }
  },
  skills: [
    {
      skillname: {
        type: String,
        required: [true, 'Please add a skill name']
      },
      icon: {
        type: String,
        required: [true, 'Please add icon image link']
      },
      edit: {
        type: Boolean,
        default: false
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
