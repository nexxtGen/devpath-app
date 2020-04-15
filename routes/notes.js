const express = require('express');
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notes');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getNotes)
  .post(protect, authorize('user', 'admin'), createNote);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getNote)
  .put(protect, authorize('user', 'admin'), updateNote)
  .delete(protect, authorize('user', 'admin'), deleteNote);

module.exports = router;
