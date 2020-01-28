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
    res.status(400).json({ success: false });
  }
};

// @desc Get single flashcard
// @route GET /api/v1/flashcards/:id
// @access Private
exports.getFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);

    if (!flashcard) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: flashcard });
  } catch (err) {
    res.status(400).json({ success: false });
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
    res.status(400).json({ success: false });
    console.log(err.message);
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
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: flashcard });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc Delete flashcard
// @route DELETE /api/v1/flashcards/:id
// @access Private
exports.deleteFlashcard = async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

    if (!flashcard) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
