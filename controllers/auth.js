const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const gravatar = require('gravatar');

// @desc Register user
// @route GET /api/v1/auth/register
// @access Public

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const avatar = gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm'
  });

  const user = await User.create({
    name,
    email,
    password,
    role,
    avatar
  });

  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});
