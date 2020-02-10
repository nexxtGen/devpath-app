const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @desc Get current users profile
// @route GET /api/v1/profile/me
// @access Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id }).populate(
    'User',
    ['name', 'avatar']
  );

  if (!profile) {
    return next(new ErrorResponse('There is no profile for this user', 404));
  }

  res.status(200).json({ success: true, data: profile });
});

// @desc Create or update user profile
// @route POST /api/v1/profile
// @access Private

exports.createProfile = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  let profile = await Profile.findOne({ user: req.user.id });

  // Update
  if (profile) {
    profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    return res.status(201).json({ success: true, data: profile });
  }

  // Create
  profile = new Profile(req.body);

  await profile.save();
  res.status(200).json({ success: true, data: profile });
});

// @desc Delete profile, user, flashcards
// @route DELETE /api/v1/profile
// @access Private

exports.deleteAccount = asyncHandler(async (req, res, next) => {
  await Profile.findOneAndRemove({ user: req.user.id });
  await User.findOneAndRemove({ _id: req.user.id });
  res.status(200).json({ success: true, msg: 'User deleted' });
});
