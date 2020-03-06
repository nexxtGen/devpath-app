const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Company = require('../models/Company');
const Job = require('../models/Job');

// @desc Get all Companies
// @route GET /api/v1/companies
// @access Private
exports.getCompanies = asyncHandler(async (req, res, next) => {
  const companies = await Company.find({ user: req.user.id });
  res
    .status(200)
    .json({ success: true, count: companies.length, data: companies });
});

// @desc Get single user company
// @route GET /api/v1/companies/:id
// @access Private
exports.getCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!company) {
    return next(
      new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: company });
});

// @desc Create new Company
// @route POST /api/v1/companies
// @access Private
exports.createCompany = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const company = await Company.create(req.body);

  res.status(201).json({
    success: true,
    data: company
  });
});

// @desc Update Company
// @route PUT /api/v1/companies/:id
// @access Private
exports.updateCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!company) {
    return next(
      new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: company });
});

// @desc Delete Company
// @route DELETE /api/v1/companies/:id
// @access Private
exports.deleteCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findByIdAndDelete(req.params.id);

  if (!company) {
    return next(
      new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
    );
  }

  await Job.remove({ companyId: company._id });

  res.status(200).json({ success: true, data: {} });
});
