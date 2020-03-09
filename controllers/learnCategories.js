const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const LearnCategory = require('../models/LearnCategory');
const LearnItem = require('../models/LearnItem');

// @desc Get all Learn Categories
// @route GET /api/v1/learn-categories
// @access Private
exports.getLearnCategories = asyncHandler(async (req, res, next) => {
  const categories = await LearnCategory.find({ user: req.user.id });
  res
    .status(200)
    .json({ success: true, count: categories.length, data: categories });
});

// @desc Get single Learn Category
// @route GET /api/v1/learn-categories/:id
// @access Private
exports.getLearnCategory = asyncHandler(async (req, res, next) => {
  const category = await LearnCategory.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!category) {
    return next(
      new ErrorResponse(
        `Learn category not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: category });
});

// @desc Create new Learn Category
// @route POST /api/v1/learn-categories
// @access Private
exports.createLearnCategory = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const category = await LearnCategory.create(req.body);

  res.status(201).json({
    success: true,
    data: category
  });
});

// @desc Update Learn Category
// @route PUT /api/v1/learn-categories/:id
// @access Private
exports.updateLearnCategory = asyncHandler(async (req, res, next) => {
  const category = await LearnCategory.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!category) {
    return next(
      new ErrorResponse(
        `Learn category not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: category });
});

// @desc Delete Company
// @route DELETE /api/v1/companies/:id
// @access Private
exports.deleteLearnCategory = asyncHandler(async (req, res, next) => {
  const category = await LearnCategory.findByIdAndDelete(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(
        `Learn category not found with id of ${req.params.id}`,
        404
      )
    );
  }

  await LearnItem.remove({ categoryId: category._id });

  res.status(200).json({ success: true, data: {} });
});
