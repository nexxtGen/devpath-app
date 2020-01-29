const ErrorResponse = require('../utils/errorResponse');
const Flashcard = require('../models/Flashcard');

// @desc Get all flashcards
// @route GET /api/v1/flashcards
// @access Private
exports.getFlashcards = async (req, res, next) => {
  try {
    const flashcards = await Flashcard.find();
    res
      .status(200)
      .json({ success: true, count: flashcards.length, data: flashcards });
  } catch (err) {
    next(err);
  }
};

// @desc Get single flashcard
// @route GET /api/v1/flashcards/:id
// @access Private
exports.getFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);

    if (!flashcard) {
      return next(
        new ErrorResponse(
          `Flashcard not found with id of ${req.params.id}`,
          404
        )
      );
    }

    res.status(200).json({ success: true, data: flashcard });
  } catch (err) {
    next(err);
  }
};

// @desc Create new flashcard
// @route POST /api/v1/flashcards
// @access Private
exports.createFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.create(req.body);

    res.status(201).json({
      success: true,
      data: flashcard
    });
  } catch (err) {
    next(err);
  }
};

// @desc Update flashcard
// @route PUT /api/v1/flashcards/:id
// @access Private
exports.updateFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!flashcard) {
      return next(
        new ErrorResponse(
          `Flashcard not found with id of ${req.params.id}`,
          404
        )
      );
    }

    res.status(200).json({ success: true, data: flashcard });
  } catch (err) {
    next(err);
  }
};

// @desc Delete flashcard
// @route DELETE /api/v1/flashcards/:id
// @access Private
exports.deleteFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

    if (!flashcard) {
      return next(
        new ErrorResponse(
          `Flashcard not found with id of ${req.params.id}`,
          404
        )
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(err);
  }
};
