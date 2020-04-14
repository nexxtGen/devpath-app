const express = require('express');
const {
  getLanes,
  getLane,
  createLane,
  updateLane,
  deleteLane
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

module.exports = router;
