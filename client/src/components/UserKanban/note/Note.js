import React, { useState } from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Button,
  Typography,
  Divider,
  LinearProgress
} from '@material-ui/core';
import NoteMenu from './NoteMenu';
import PriorityBox from './PriorityBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Draggable } from 'react-beautiful-dnd';
import { primary } from '../../../shared/colors';

const styles = createStyles({
  noteContainer: {
    boxShadow: '-1px 1px 8px #d9d9d9',
    borderRadius: '6px',
    width: '100%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  line: {
    width: '100%',
    height: 5,
    background: '#A9D0F5',
    borderRadius: '6px 6px 0 0'
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between'
  },
  contentHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  editIcon: {
    color: primary
  },
  divider: {
    margin: '2px 15px'
  },
  descContainer: {
    padding: '8px 14px',
    margin: '5px 0 15px'
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
  },
  progressContainer: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    padding: '0 25px 14px',
    width: '100%'
  },
  progressText: {
    fontSize: 15,
    color: '#525252',
    paddingLeft: 20
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

  const normalise = (value, steps) => ((value - 0) * 100) / (steps - 0);

  return (
    <Draggable draggableId={note._id} index={index}>
      {provided => (
        <Grid
          className={classes.noteContainer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <Grid className={classes.line}></Grid>
          <Grid className={classes.contentContainer}>
            <Grid className={classes.contentHeader}>
              <PriorityBox priority={note.priority} />
              <Grid>
                <Button
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleOpenMenu}
                  color='primary'
                  style={{ margin: 4 }}
                >
                  <SettingsIcon className={classes.editIcon} />
                </Button>
                <NoteMenu
                  anchorEl={anchorEl}
                  handleCloseMenu={handleCloseMenu}
                  note={note}
                  laneId={laneId}
                  setIsOpenNoteFormModal={setIsOpenNoteFormModal}
                />
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid className={classes.descContainer}>
              <Typography variant='body2'>{note.description}</Typography>
            </Grid>
            <Grid>
              {note.setProgress ? (
                <Grid className={classes.progressContainer}>
                  <Grid item xs={10}>
                    <LinearProgress
                      value={normalise(note.progress, note.steps)}
                      variant='determinate'
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.progressText}>
                      {note.progress}/{note.steps}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                ''
              )}
            </Grid>
            <Grid>
              {note.image ? (
                <Grid className={classes.imgContainer}>
                  <Grid
                    className={classes.picture}
                    style={{
                      backgroundImage: `url('${note.image}')`
                    }}
                  ></Grid>
                </Grid>
              ) : (
                <Grid></Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Note);
