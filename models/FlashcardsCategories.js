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
          card: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Flashcard',
            required: true
          }
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

module.exports = mongoose.model(
  'FlashcardsCategories',
  FlashcardsCategoriesSchema
);
