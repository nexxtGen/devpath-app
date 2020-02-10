const express = require('express');
const {
  getMe,
  createProfile,
  deleteAccount
} = require('../controllers/profile');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.route('/me').get(protect, authorize('user', 'admin'), getMe);

router
  .route('/')
  .post(protect, authorize('user', 'admin'), createProfile)
  .delete(protect, authorize('user', 'admin'), deleteAccount);

module.exports = router;
