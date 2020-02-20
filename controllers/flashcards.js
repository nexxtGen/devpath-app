const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Flashcard = require('../models/Flashcard');

// @desc Get all flashcards
// @route GET /api/v1/flashcards
// @access Private
exports.getFlashcards = asyncHandler(async (req, res, next) => {
  const flashcards = await Flashcard.find({ user: req.user.id });
  res
    .status(200)
    .json({ success: true, count: flashcards.length, data: flashcards });
});

// @desc Get single flashcard
// @route GET /api/v1/flashcards/:id
// @access Private
exports.getFlashcard = asyncHandler(async (req, res, next) => {
  const flashcard = await Flashcard.findById(req.params.id);

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
  const flashcard = await Flashcard.create(req.body);

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

  res.status(200).json({ success: true, data: {} });
});
