const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const FlashcardsCategories = require('../models/FlashcardsCategories');
const Flashcard = require('../models/Flashcard');

// @desc Get user flashcards categories
// @route GET /api/v1/flashcards-categories
// @access Private
exports.getFlashcardsCategories = asyncHandler(async (req, res, next) => {
  const categories = await FlashcardsCategories.findOne({
    user: req.user.id
  });

  if (!categories) {
    return next(new ErrorResponse('There is no categories for this user', 404));
  }

  res.status(200).json({ success: true, data: categories });
});

// @desc Create new flashcard category
// @route POST /api/v1/flashcards-categories
// @access Private

exports.createFlashcardsCategory = asyncHandler(async (req, res, next) => {
  const { name, image } = req.body;

  const categoryFields = {};

  categoryFields.user = req.user.id;
  categoryFields.categories = [
    {
      name,
      image,
      flashcards: []
    }
  ];

  let categories = await FlashcardsCategories.findOne({ user: req.user.id });

  if (categories) {
    categories.categories.push({
      name,
      image,
      flashcards: []
    });

    updatedCategories = await FlashcardsCategories.findOneAndUpdate(
      { user: req.user.id },
      { $set: categories },
      { new: true }
    );

    res.json(updatedCategories);
  }

  categories = new FlashcardsCategories(categoryFields);
  await categories.save();
  res.json(categories);
});

// @desc Delete Flashcards Category
// @route DELETE /api/v1/flashcards-categories/:id
// @access Private
exports.deleteFlashcardsCategory = asyncHandler(async (req, res, next) => {
  let category = await FlashcardsCategories.findOne({
    user: req.user.id
  });

  if (!category) {
    return next(new ErrorResponse('There is no categories for this user', 404));
  }

  const filtered = category.categories.filter(
    item => item._id.toString() !== req.params.id
  );

  category.categories = filtered;
  const updatedCategories = await FlashcardsCategories.findOneAndUpdate(
    { user: req.user.id },
    { $set: category },
    { new: true }
  );

  res.json(updatedCategories);
});
