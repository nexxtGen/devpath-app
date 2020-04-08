const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');
const Lane = require('../models/Lane');
const Note = require('../models/Note');

// @desc Get all Boards
// @route GET /api/v1/boards
// @access Private
exports.getBoards = asyncHandler(async (req, res, next) => {
  const boards = await Board.find({ user: req.user.id });

  res.status(200).json({ success: true, count: boards.length, data: boards });
});

// @desc Get single user board
// @route GET /api/v1/boards/:id
// @access Private
exports.getBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!board) {
    return next(
      new ErrorResponse(`Board not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: board });
});

// @desc Create new Board
// @route POST /api/v1/boards
// @access Private
exports.createBoard = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const board = await Board.create(req.body);

  res.status(201).json({
    success: true,
    data: board
  });
});

// @desc Update Board
// @route PUT /api/v1/boards/:id
// @access Private
exports.updateBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!board) {
    return next(
      new ErrorResponse(`Board not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: board });
});

// @desc Delete Board
// @route DELETE /api/v1/boards/:id
// @access Private
exports.deleteBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findByIdAndDelete(req.params.id);

  if (!board) {
    return next(
      new ErrorResponse(`Board not found with id of ${req.params.id}`, 404)
    );
  }

  await Lane.remove({ boardId: board._id });
  await Note.remove({ boardId: board._id });

  res.status(200).json({ success: true, data: {} });
});
