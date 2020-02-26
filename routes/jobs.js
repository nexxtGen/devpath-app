const express = require('express');
const {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob
} = require('../controllers/jobs');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getJobs)
  .post(protect, authorize('user', 'admin'), createJob);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getJob)
  .put(protect, authorize('user', 'admin'), updateJob)
  .delete(protect, authorize('user', 'admin'), deleteJob);

module.exports = router;
