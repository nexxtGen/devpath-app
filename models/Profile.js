const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  company: {
    type: String
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
      level: {
        type: Number,
        min: [1, 'One is a minimal value'],
        max: [6, 'Six is a max value'],
        required: [true, 'Please add a skill level']
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
