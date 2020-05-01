const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Note = require('../models/Note');
const Lane = require('../models/Lane');

// @desc Get all Notes
// @route GET /api/v1/notes
// @access Private
exports.getNotes = asyncHandler(async (req, res, next) => {
  const notes = await Note.find({ user: req.user.id });

  res.status(200).json({ success: true, count: notes.length, data: notes });
});

// @desc Get single user Note
// @route GET /api/v1/lanes/:id
// @access Private
exports.getNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!note) {
    return next(
      new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: note });
});

// @desc Create new Note
// @route POST /api/v1/notes
// @access Private
exports.createNote = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  let lane = await Lane.findOne({
    _id: req.body.laneId,
    user: req.user.id
  });

  if (!lane) {
    return next(
      new ErrorResponse(`Lane not found with id of ${req.body.boardId}`, 404)
    );
  }

  const note = await Note.create(req.body);

  lane.notes.push(note._id.toString());

  await Lane.findOneAndUpdate(
    { _id: req.body.laneId },
    { $set: lane },
    { new: true }
  );

  res.status(201).json({
    success: true,
    data: note
  });
});

// @desc Update Note
// @route PUT /api/v1/notes/:id
// @access Private
exports.updateNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!note) {
    return next(
      new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: note });
});

// @desc Delete Note
// @route DELETE /api/v1/notes/:id
// @access Private
exports.deleteNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) {
    return next(
      new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
    );
  }

  let lane = await Lane.findOne({
    _id: req.body.laneId,
    user: req.user.id
  });

  const filtered = lane.notes.filter(noteId => noteId.toString() !== note._id);
  lane.notes = filtered;

  await Lane.findOneAndUpdate(
    { _id: req.body.laneId },
    { $set: lane },
    { new: true }
  );

  res.status(200).json({ success: true, data: {} });
});

// MOVE NOTES

// @desc Move note in Lane
// @route PUT /api/v1/notes/move-note-in-lane
// @access Private
exports.moveNoteInLane = asyncHandler(async (req, res, next) => {
  console.log('body:', req.body);

  const lane = await Lane.findByIdAndUpdate(req.body._id.toString(), req.body, {
    new: true,
    runValidators: true
  });

  if (!lane) {
    return next(
      new ErrorResponse(`Lane not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: lane });
});

// @desc Move between lanes
// @route PUT /api/v1/notes/move-note-between-lanes
// @access Private
exports.moveNoteBetweenLanes = asyncHandler(async (req, res, next) => {
  await Lane.findByIdAndUpdate(
    req.body.startLane._id.toString(),
    req.body.startLane,
    {
      new: true,
      runValidators: true
    }
  );

  await Lane.findByIdAndUpdate(
    req.body.finishLane._id.toString(),
    req.body.finishLane,
    {
      new: true,
      runValidators: true
    }
  );

  const note = await Note.findById(req.body.noteId);

  note.laneId = req.body.finishLane._id.toString();

  await Note.findByIdAndUpdate(req.body.noteId, note, {
    new: true,
    runValidators: false
  });

  res.status(200).json({ success: true, data: {} });
});
