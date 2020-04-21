const express = require('express');
const {
  getLanes,
  getLane,
  createLane,
  updateLane,
  deleteLane,
  moveLaneInBoard
} = require('../controllers/lanes');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getLanes)
  .post(protect, authorize('user', 'admin'), createLane);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getLane)
  .put(protect, authorize('user', 'admin'), updateLane)
  .delete(protect, authorize('user', 'admin'), deleteLane);

router
  .route('/move-lane-in-board/:id')
  .put(protect, authorize('user', 'admin'), moveLaneInBoard);

module.exports = router;
