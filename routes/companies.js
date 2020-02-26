const express = require('express');
const {
  getCompany,
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany
} = require('../controllers/companies');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getCompanies)
  .post(protect, authorize('user', 'admin'), createCompany);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getCompany)
  .put(protect, authorize('user', 'admin'), updateCompany)
  .delete(protect, authorize('user', 'admin'), deleteCompany);

module.exports = router;
