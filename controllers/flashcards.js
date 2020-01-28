// @desc Get all flashcards
// @route GET /api/v1/flashcards
// @access Private
exports.getFlashcards = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all flashcards' });
};

// @desc Get single flashcard
// @route GET /api/v1/flashcards/:id
// @access Private
exports.getFlashcard = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show flashcard ${req.params.id}` });
};

// @desc Create new flashcard
// @route POST /api/v1/flashcards
// @access Private
exports.createFlashcard = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new flashcard' });
};

// @desc Update flashcard
// @route PUT /api/v1/flashcards/:id
// @access Private
exports.updateFlashcard = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update flashcard ${req.params.id}` });
};

// @desc Delete flashcard
// @route DELETE /api/v1/flashcards/:id
// @access Private
exports.deleteFlashcard = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete flashcard ${req.params.id}` });
};
