const express = require('express');
const {
  getLearnItems,
  getLearnItem,
  createLearnItem,
  updateLearnItem,
  deleteLearnItem
} = require('../controllers/learnItems');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getLearnItems)
  .post(protect, authorize('user', 'admin'), createLearnItem);
router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getLearnItem)
  .put(protect, authorize('user', 'admin'), updateLearnItem)
  .delete(protect, authorize('user', 'admin'), deleteLearnItem);

module.exports = router;
