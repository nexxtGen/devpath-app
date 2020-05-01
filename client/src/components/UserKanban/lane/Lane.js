import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import EditLane from '../../UserKanbanForms/Lanes/EditLane';
import Note from '../note/Note';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import { primary } from '../../../shared/colors';

const styles = createStyles({
  lane: {
    background: 'white',
    border: '1px solid lightgray',
    borderRadius: '2px 8px 2px 8px',
    width: 350,
    minHeight: 330,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 12,
    margin: '0 10px 20px 10px',
    boxShadow: '-6px 5px 11px #E6E6E6'
  },
  laneName: {
    width: '100%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    margin: '8px 0 12px 0'
  },
  notesContainer: {
    width: '100%',
    minHeight: 150,
    background: '#F3F4F6',
    borderRadius: 7
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    color: primary
  },
  icon2: {
    color: '#f50057'
  },
  button: {
    border: 'none',
    background: 'white',
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginLeft: 5,
    transition: 'background 0.3s',
    '&:hover': {
      background: '#F2F2F2',
      cursor: 'pointer'
    },
    '&:active': {
      background: '#C1C1C1',
      transition: 'background 0.4s'
    }
  },
  addNoteBtn: {
    width: '100%',
    padding: 10,
    margin: '15px 0'
  },
  addIconContainer: {
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  addNoteTypo: {
    fontWeight: 600,
    color: '#585858',
    fontSize: 18,
    textTransform: 'none'
  }
});

const Lane = ({
  classes,
  lane,
  laneNotes,
  index,
  setIsOpenNoteFormModal,
  editUserKanbanLane,
  updateUserKanbanLane,
  deleteUserKanbanLane,
  currentBoard,
  setCurrentKanbanLane
}) => {
  const handleOpenNoteForm = () => {
    setCurrentKanbanLane(lane);
    setIsOpenNoteFormModal({ open: true, mode: 'create' });
  };

  return (
    <Grid>
      <Draggable draggableId={lane._id} index={index}>
        {provided => (
          <Grid
            className={classes.lane}
            {...provided.draggableProps}
            innerRef={provided.innerRef}
          >
            <Grid className={classes.laneName} {...provided.dragHandleProps}>
              <Grid item xs={8}>
                <EditLane
                  editing={lane.editing}
                  value={lane.name}
                  onValueClick={() => editUserKanbanLane(lane._id)}
                  onUpdate={name =>
                    updateUserKanbanLane(lane._id, {
                      ...lane,
                      name,
                      editing: false
                    })
                  }
                />
              </Grid>
              <Grid item xs={4} className={classes.icons}>
                <button
                  onClick={() => editUserKanbanLane(lane._id)}
                  className={classes.button}
                >
                  <EditIcon className={classes.icon} />
                </button>
                <button
                  onClick={() =>
                    deleteUserKanbanLane(lane._id, currentBoard._id)
                  }
                  className={classes.button}
                >
                  <DeleteOutlineIcon className={classes.icon2} />
                </button>
              </Grid>
            </Grid>
            <Droppable droppableId={lane._id} type='note'>
              {provided => (
                <Grid
                  className={classes.notesContainer}
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {laneNotes.map((noteItem, index) =>
                    noteItem ? (
                      <Note
                        laneId={lane._id}
                        key={noteItem._id}
                        note={noteItem}
                        index={index}
                        setIsOpenNoteFormModal={setIsOpenNoteFormModal}
                      />
                    ) : (
                      <Typography key={index}>
                        Note is Undefined. Data error.
                      </Typography>
                    )
                  )}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
            <Button
              variant='outlined'
              onClick={() => handleOpenNoteForm()}
              className={classes.addNoteBtn}
            >
              <Grid className={classes.addIconContainer}>
                <AddIcon style={{ color: 'white' }} />
              </Grid>
              <Typography className={classes.addNoteTypo}>
                Add another note
              </Typography>
            </Button>
          </Grid>
        )}
      </Draggable>
    </Grid>
  );
};

export default withStyles(styles)(Lane);
