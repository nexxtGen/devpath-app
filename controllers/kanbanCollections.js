const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const KanbanCollection = require('../models/KanbanCollection');
const Board = require('../models/Board');
const Lane = require('../models/Lane');
const Note = require('../models/Note');

// @desc Get all Kanban Collections
// @route GET /api/v1/kanban-collections
// @access Private
exports.getKanbanCollections = asyncHandler(async (req, res, next) => {
  const collections = await KanbanCollection.find({ user: req.user.id });

  res
    .status(200)
    .json({ success: true, count: collections.length, data: collections });
});

// @desc Get single Kanban Collection
// @route GET /api/v1/kanban-collections/:id
// @access Private
exports.getKanbanCollection = asyncHandler(async (req, res, next) => {
  const collection = await KanbanCollection.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!collection) {
    return next(
      new ErrorResponse(
        `Kanban collection not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: collection });
});

// @desc Create new Kanban Collection
// @route POST /api/v1/kanban-collections
// @access Private
exports.createKanbanCollection = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const collection = await KanbanCollection.create(req.body);

  res.status(201).json({
    success: true,
    data: collection
  });
});

// @desc Update Kanban Collection
// @route PUT /api/v1/kanban-collections/:id
// @access Private
exports.updateKanbanCollection = asyncHandler(async (req, res, next) => {
  const collection = await KanbanCollection.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!collection) {
    return next(
      new ErrorResponse(
        `Kanban collection not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: collection });
});

// @desc Delete Kanban Collection
// @route DELETE /api/v1/kanban-collections/:id
// @access Private
exports.deleteKanbanCollection = asyncHandler(async (req, res, next) => {
  const collection = await KanbanCollection.findByIdAndDelete(req.params.id);

  if (!collection) {
    return next(
      new ErrorResponse(
        `Kanban collection not found with id of ${req.params.id}`,
        404
      )
    );
  }

  await Lane.remove({ collectionId: collection._id });
  await Note.remove({ collectionId: collection._id });
  await Board.remove({ collectionId: collection._id });

  res.status(200).json({ success: true, data: {} });
});
