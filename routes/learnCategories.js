const express = require('express');
const {
  getLearnCategory,
  getLearnCategories,
  createLearnCategory,
  updateLearnCategory,
  deleteLearnCategory
} = require('../controllers/learnCategories');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getLearnCategories)
  .post(protect, authorize('user', 'admin'), createLearnCategory);
router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getLearnCategory)
  .put(protect, authorize('user', 'admin'), updateLearnCategory)
  .delete(protect, authorize('user', 'admin'), deleteLearnCategory);

module.exports = router;
