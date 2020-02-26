const mongoose = require('mongoose');

const FlashcardsCategoriesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categories: [
    {
      name: {
        type: String,
        required: [true, 'Category Name is required']
      },
      image: {
        type: String,
        required: [true, 'Image link is required']
      },
      flashcards: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Flashcard',
          required: true
        }
      ],
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

async function populateFlashcards(next) {
  this.populate('categories.flashcards');
  next();
}

FlashcardsCategoriesSchema.pre('find', populateFlashcards);
FlashcardsCategoriesSchema.pre('findOne', populateFlashcards);

module.exports = mongoose.model(
  'FlashcardsCategories',
  FlashcardsCategoriesSchema
);
