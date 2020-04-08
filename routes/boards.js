const express = require('express');
const {
  getBoard,
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard
} = require('../controllers/boards');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getBoards)
  .post(protect, authorize('user', 'admin'), createBoard);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getBoard)
  .put(protect, authorize('user', 'admin'), updateBoard)
  .delete(protect, authorize('user', 'admin'), deleteBoard);

module.exports = router;
