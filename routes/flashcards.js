const express = require('express');
const {
  getFlashcard,
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
} = require('../controllers/flashcards');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getFlashcards)
  .post(protect, authorize('user', 'admin'), createFlashcard);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getFlashcard)
  .put(protect, authorize('user', 'admin'), updateFlashcard)
  .delete(protect, authorize('user', 'admin'), deleteFlashcard);

module.exports = router;
