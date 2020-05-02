import React, { useState } from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import NoteMenu from './NoteMenu';
import PriorityBox from './PriorityBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Draggable } from 'react-beautiful-dnd';

const styles = createStyles({
  noteContainer: {
    border: '1px solid lightgray',
    borderRadius: '6px',
    width: '100%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between'
  },

  descContainer: {
    padding: 6
  },
  imgContainer: {
    height: '80px'
  },
  picture: {
    background: 'rgb(233, 233, 233)',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    borderRadius: '0 0 6px 6px'
  }
});

const Note = ({ classes, note, laneId, index, setIsOpenNoteFormModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Draggable draggableId={note._id} index={index}>
      {provided => (
        <Grid
          className={classes.noteContainer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <Grid className={classes.contentContainer}>
            <Grid>
              <PriorityBox priority={note.priority} />
              <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleOpenMenu}
                color='primary'
              >
                <SettingsIcon />
              </Button>
              <NoteMenu
                anchorEl={anchorEl}
                handleCloseMenu={handleCloseMenu}
                note={note}
                laneId={laneId}
                setIsOpenNoteFormModal={setIsOpenNoteFormModal}
              />
            </Grid>
            <Grid className={classes.descContainer}>
              <Typography variant='body2'>{note.description}</Typography>
            </Grid>
            <Grid className={classes.imgContainer}>
              <Grid
                className={classes.picture}
                style={{
                  backgroundImage: `url('${note.image}')`
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Note);
