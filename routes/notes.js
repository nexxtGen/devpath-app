const express = require('express');
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  moveNoteInLane,
  moveNoteBetweenLanes
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

router
  .route('/move-note-in-lane/:id')
  .put(protect, authorize('user', 'admin'), moveNoteInLane);

router
  .route('/move-note-between-lanes/:id')
  .put(protect, authorize('user', 'admin'), moveNoteBetweenLanes);

module.exports = router;
