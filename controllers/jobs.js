const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Job = require('../models/Job');
const Company = require('../models/Company');
//const FlashcardsCategories = require('../models/FlashcardsCategories');

// @desc Get all jobs
// @route GET /api/v1/jobs
// @access Private
exports.getJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find({ user: req.user.id });
  res.status(200).json({ success: true, count: jobs.length, data: jobs });
});

// @desc Get single user job
// @route GET /api/v1/jobs/:id
// @access Private
exports.getJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!job) {
    return next(
      new ErrorResponse(`Job not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: job });
});

// @desc Create new job
// @route POST /api/v1/jobs
// @access Private
exports.createJob = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  let company = await Company.findOne({
    _id: req.body.companyId,
    user: req.user.id
  });

  if (!company) {
    return next(
      new ErrorResponse(
        `Company not found with id of ${req.body.companyId}`,
        404
      )
    );
  }

  const job = await Job.create(req.body);
  console.log(company);

  company.jobs.push(job._id.toString());

  await Company.findOneAndUpdate(
    { _id: req.body.companyId },
    { $set: company },
    { new: true }
  );

  res.status(201).json({
    success: true,
    data: job
  });
});

// @desc Update Job
// @route PUT /api/v1/Jobs/:id
// @access Private
exports.updateJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!job) {
    return next(
      new ErrorResponse(`Job not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: job });
});

// @desc Delete job
// @route DELETE /api/v1/jobs/:id
// @access Private
exports.deleteJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return next(
      new ErrorResponse(`Job not found with id of ${req.params.id}`, 404)
    );
  }

  let company = await Company.findOne({ _id: job.companyId.toString() });
  console.log('JOOB', job);
  const filtered = company.jobs.filter(
    item => item.toString() !== req.params.id
  );
  company.jobs = filtered;

  const updatedCompany = await Company.findOneAndUpdate(
    { _id: job.companyId.toString() },
    { $set: company },
    { new: true }
  );

  res.status(200).json({ success: true, data: updatedCompany });
});
