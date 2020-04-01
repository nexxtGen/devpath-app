const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const LearnItem = require('../models/LearnItem');
const LearnCategory = require('../models/LearnCategory');

// @desc Get all Learn Items
// @route GET /api/v1/learn-items
// @access Private
exports.getLearnItems = asyncHandler(async (req, res, next) => {
  const learnItems = await LearnItem.find({ user: req.user.id });
  res
    .status(200)
    .json({ success: true, count: learnItems.length, data: learnItems });
});

// @desc Get single Learn Item
// @route GET /api/v1/learn-items/:id
// @access Private
exports.getLearnItem = asyncHandler(async (req, res, next) => {
  const learnItem = await LearnItem.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!learnItem) {
    return next(
      new ErrorResponse(`Learn Item not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: learnItem });
});

// @desc Create new Learn Item
// @route POST /api/v1/learn-items
// @access Private
exports.createLearnItem = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  let category = await LearnCategory.findOne({
    _id: req.body.categoryId,
    user: req.user.id
  });

  if (!category) {
    return next(
      new ErrorResponse(
        `Category not found with id of ${req.body.categoryId}`,
        404
      )
    );
  }

  const learnItem = await LearnItem.create(req.body);

  category.items.push(learnItem._id.toString());

  await LearnCategory.findOneAndUpdate(
    { _id: req.body.categoryId },
    { $set: category },
    { new: true }
  );

  res.status(201).json({
    success: true,
    data: learnItem
  });
});

// @desc Update Learn Item
// @route PUT /api/v1/learn-items/:id
// @access Private
exports.updateLearnItem = asyncHandler(async (req, res, next) => {
  const learnItem = await LearnItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  console.log('req.body:', req.body);
  if (!learnItem) {
    return next(
      new ErrorResponse(`Learn Item not found with id of ${req.params.id}`, 404)
    );
  }

  if (req.body.categoryId !== req.body.prevCategory) {
    // delete item from prev category

    let prevCategory = await LearnCategory.findOne({
      _id: req.body.prevCategory
    });

    const filtered = prevCategory.items.filter(
      item => item._id.toString() !== req.params.id
    );

    prevCategory.items = filtered;

    await LearnCategory.findOneAndUpdate(
      { _id: req.body.prevCategory },
      { $set: prevCategory },
      { new: true }
    );

    // add item to new category
    let actualCategory = await LearnCategory.findOne({
      _id: req.body.categoryId
    });

    let newArray = [...actualCategory.items, req.params.id.toString()];
    actualCategory.items = newArray;
    const updatedCategory = await LearnCategory.findOneAndUpdate(
      { _id: req.body.categoryId.toString() },
      { $set: actualCategory },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedCategory });
  }

  res.status(200).json({ success: true, data: learnItem });
});

// @desc Delete Learn Item
// @route DELETE /api/v1/learn-items/:id
// @access Private
exports.deleteLearnItem = asyncHandler(async (req, res, next) => {
  const learnItem = await LearnItem.findByIdAndDelete(req.params.id);

  if (!learnItem) {
    return next(
      new ErrorResponse(`Learn Item not found with id of ${req.params.id}`, 404)
    );
  }

  let category = await LearnCategory.findOne({
    _id: learnItem.categoryId.toString()
  });

  const filtered = category.items.filter(
    item => item.toString() !== req.params.id
  );
  category.items = filtered;

  const updatedCategory = await LearnCategory.findOneAndUpdate(
    { _id: learnItem.categoryId.toString() },
    { $set: category },
    { new: true }
  );

  res.status(200).json({ success: true, data: updatedCategory });
});
