const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Flashcard = require('../models/Flashcard');
const FlashcardsCategories = require('../models/FlashcardsCategories');

// @desc Get all flashcards
// @route GET /api/v1/flashcards
// @access Private
exports.getFlashcards = asyncHandler(async (req, res, next) => {
  const flashcards = await Flashcard.find({ user: req.user.id });
  res
    .status(200)
    .json({ success: true, count: flashcards.length, data: flashcards });
});

// @desc Get single user flashcard
// @route GET /api/v1/flashcards/:id
// @access Private
exports.getFlashcard = asyncHandler(async (req, res, next) => {
  const flashcard = await Flashcard.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!flashcard) {
    return next(
      new ErrorResponse(`Flashcard not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: flashcard });
});

// @desc Create new flashcard
// @route POST /api/v1/flashcards
// @access Private
exports.createFlashcard = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const flashcard = await Flashcard.create(req.body);
  let category = await FlashcardsCategories.findOne({ user: req.user.id });

  category.categories.map(item => {
    if (item._id.toString() === req.body.categoryId)
      item.flashcards.push(flashcard._id);
  });

  await FlashcardsCategories.findOneAndUpdate(
    { user: req.user.id },
    { $set: category },
    { new: true }
  );

  res.status(201).json({
    success: true,
    data: flashcard
  });
});

// @desc Update flashcard
// @route PUT /api/v1/flashcards/:id
// @access Private
exports.updateFlashcard = asyncHandler(async (req, res, next) => {
  const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!flashcard) {
    return next(
      new ErrorResponse(`Flashcard not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: flashcard });
});

// @desc Delete flashcard
// @route DELETE /api/v1/flashcards/:id
// @access Private
exports.deleteFlashcard = asyncHandler(async (req, res, next) => {
  const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

  if (!flashcard) {
    return next(
      new ErrorResponse(`Flashcard not found with id of ${req.params.id}`, 404)
    );
  }

  let category = await FlashcardsCategories.findOne({ user: req.user.id });

  category.categories.map(item => {
    if (item._id.toString() === req.body.categoryId)
      item.flashcards.filter(card => card !== req.params.id);
  });

  await FlashcardsCategories.findOneAndUpdate(
    { user: req.user.id },
    { $set: category },
    { new: true }
  );

  res.status(200).json({ success: true, data: {} });
});
