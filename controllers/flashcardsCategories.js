const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const FlashcardsCategories = require('../models/FlashcardsCategories');
const Flashcard = require('../models/Flashcard');

// @desc Get all flashcards categories
// @route GET /api/v1/flashcards/categories
// @access Private
exports.getFlashcardsCategories = asyncHandler(async (req, res, next) => {
  //req.body.user = req.user.id;

  const categories = await FlashcardsCategories.findOne({
    user: req.user.id
  });

  if (!categories) {
    return next(new ErrorResponse('There is no categories for this user', 404));
  }

  res.status(200).json({ success: true, data: categories });
});

// @desc Create new flashcard category
// @route POST /api/v1/flashcards/categories
// @access Private

exports.createFlashcardsCategory = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const { categoryName, imageLink } = req.body;

  const categoryFields = {};

  categoryFields.user = req.user.id;
  categoryFields.categories = [
    {
      name: categoryName,
      image: imageLink,
      flashcards: []
    }
  ];

  let categories = await FlashcardsCategories.findOne({ user: req.user.id });

  if (!categories) {
    categories = new FlashcardsCategories(categoryFields);
    await categories.save();
    res.json(categories);
  }

  categories = await FlashcardsCategories.findOneAndUpdate(
    { user: req.user.id },
    { $set: categoryFields },
    { new: true }
  );
});
