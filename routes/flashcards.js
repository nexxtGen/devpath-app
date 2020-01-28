const express = require('express');
const {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
} = require('../controllers/flashcards');

const router = express.Router();

router
  .route('/')
  .get(getFlashcards)
  .post(createFlashcard);

router
  .route('/:id')
  .get(getFlashcard)
  .put(updateFlashcard)
  .delete(deleteFlashcard);

module.exports = router;
