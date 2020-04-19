const express = require('express');
const {
  getKanbanCollection,
  getKanbanCollections,
  createKanbanCollection,
  updateKanbanCollection,
  deleteKanbanCollection
} = require('../controllers/kanbanCollections');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('user', 'admin'), getKanbanCollections)
  .post(protect, authorize('user', 'admin'), createKanbanCollection);

router
  .route('/:id')
  .get(protect, authorize('user', 'admin'), getKanbanCollection)
  .put(protect, authorize('user', 'admin'), updateKanbanCollection)
  .delete(protect, authorize('user', 'admin'), deleteKanbanCollection);

module.exports = router;
