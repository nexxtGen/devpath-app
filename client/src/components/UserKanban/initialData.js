const initialData = {
  lanes: [
    {
      user: '01',
      name: 'First Lane',
      _id: 'lane_01',
      boardId: 'board_01',
      notes: ['note_01', 'note_02', 'note_03']
    },
    {
      user: '01',
      name: 'Second Lane',
      _id: 'lane_02',
      boardId: 'board_01',
      notes: ['note_04']
    },
    {
      user: '01',
      name: 'Third Lane',
      _id: 'lane_03',
      boardId: 'board_01',
      notes: ['note_05']
    }
  ],
  notes: [
    {
      _id: 'note_01',
      name: 'Pierwsza notka',
      laneId: 'lane_01'
    },
    {
      _id: 'note_02',
      name: 'Druga notka',
      laneId: 'lane_01'
    },
    {
      _id: 'note_03',
      name: 'Trzecia notka',
      laneId: 'lane_01'
    },
    {
      _id: 'note_01',
      name: 'Czwarta notka',
      laneId: 'lane_02'
    },
    {
      _id: 'note_01',
      name: 'Piąta notka',
      laneId: 'lane_03'
    }
  ]
};

export default initialData;
