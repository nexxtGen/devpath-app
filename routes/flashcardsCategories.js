const express = require('express');
const {
  getFlashcardsCategories,
  createFlashcardsCategory,
  deleteFlashcardsCategory
} = require('../controllers/flashcardsCategories');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getFlashcardsCategories)
  .post(protect, authorize('user', 'admin'), createFlashcardsCategory);
router
  .route('/:id')
  .delete(protect, authorize('user', 'admin'), deleteFlashcardsCategory);

module.exports = router;
