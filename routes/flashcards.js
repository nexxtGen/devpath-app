const express = require('express');
const {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
} = require('../controllers/flashcards');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getFlashcards)
  .post(protect, createFlashcard);

router
  .route('/:id')
  .get(protect, getFlashcard)
  .put(protect, updateFlashcard)
  .delete(protect, deleteFlashcard);

module.exports = router;
