const express = require('express');
const {
  getFlashcardsCategories,
  createFlashcardsCategory
} = require('../controllers/flashcardsCategories');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getFlashcardsCategories)
  .post(protect, authorize('user', 'admin'), createFlashcardsCategory);

module.exports = router;
