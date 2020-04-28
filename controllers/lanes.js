const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');
const Lane = require('../models/Lane');
const Note = require('../models/Note');

// @desc Get all Lanes
// @route GET /api/v1/lanes
// @access Private
exports.getLanes = asyncHandler(async (req, res, next) => {
  const lanes = await Lane.find({ user: req.user.id });

  res.status(200).json({ success: true, count: lanes.length, data: lanes });
});

// @desc Get single user lane
// @route GET /api/v1/lanes/:id
// @access Private
exports.getLane = asyncHandler(async (req, res, next) => {
  const lane = await Lane.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!lane) {
    return next(
      new ErrorResponse(`Lane not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: lane });
});

// @desc Create new Lane
// @route POST /api/v1/lanes
// @access Private
exports.createLane = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  let board = await Board.findOne({
    _id: req.body.boardId,
    user: req.user.id
  });

  if (!board) {
    return next(
      new ErrorResponse(`Board not found with id of ${req.body.boardId}`, 404)
    );
  }

  const lane = await Lane.create(req.body);

  board.lanes.push(lane._id.toString());

  await Board.findOneAndUpdate(
    { _id: req.body.boardId },
    { $set: board },
    { new: true }
  );

  res.status(201).json({
    success: true,
    data: lane
  });
});

// @desc Update Lane
// @route PUT /api/v1/lanes/:id
// @access Private
exports.updateLane = asyncHandler(async (req, res, next) => {
  const lane = await Lane.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!lane) {
    return next(
      new ErrorResponse(`Lane  not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: lane });
});

// @desc Delete Lane
// @route DELETE /api/v1/lanes/:id
// @access Private
exports.deleteLane = asyncHandler(async (req, res, next) => {
  //-----

  await Lane.remove({ boardId: board._id.toString() });
  await Note.remove({ boardId: board._id.toString() });

  res.status(200).json({ success: true, data: {} });

  //-------

  const lane = await Lane.findByIdAndDelete(req.params.id);

  if (!lane) {
    return next(
      new ErrorResponse(`Lane not found with id of ${req.params.id}`, 404)
    );
  }

  let board = await Board.findById(lane.boardId);

  let filtered = board.lanes.filter(
    laneId => laneId.toString() !== lane._id.toString()
  );

  board.lanes = filtered;

  await Board.findOneAndUpdate(
    { _id: lane.boardId },
    { $set: collection },
    { new: true }
  );

  await Note.remove({ laneId: lane._id });

  res.status(200).json({ success: true, data: {} });
});

// @desc Move Lane in board
// @route PUT /api/v1/lanes/move-lane-in-board/:id
// @access Private
exports.moveLaneInBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findById(req.params.id);
  board.lanes = req.body;

  await Board.findByIdAndUpdate(req.params.id, board, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: board });
});
