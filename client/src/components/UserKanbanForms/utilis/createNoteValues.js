const createNoteValues = (noteData, collectionId, boardId, laneId) => {
  return {
    description: noteData ? noteData.description : '',
    priority: noteData ? noteData.priority : '',
    image: noteData ? noteData.image : '',
    progress: noteData ? noteData.progress : 0,
    steps: noteData ? noteData.steps : 1,
    collectionId: noteData ? noteData.collectionId : collectionId,
    boardId: noteData ? noteData.boardId : boardId,
    laneId: noteData ? noteData.laneId : laneId
  };
};

export default createNoteValues;
