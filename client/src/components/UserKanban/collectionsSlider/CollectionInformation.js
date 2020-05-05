import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { primary } from '../../../shared/colors';
import KanbanAddButton from '../../../shared/KanbanAddButton';
import KanbanListButton from '../../../shared/KanbanListButton';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
    marginBottom: 10
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `1px solid ${primary}`,
    justifyContent: 'space-between',
    padding: 8,
    width: '100%',
    height: '47px',
    marginBottom: 5
  },
  button: {
    width: 100
  }
});

const CollectionInformation = ({
  classes,
  collections,
  setIsOpenCollectionModal,
  setIsOpenCollectionsListModal,
  currentCollection
}) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.header}>
        <Typography variant='body1' color='textSecondary'>
          Current collection:{' '}
          <span style={{ color: 'black' }}>
            {currentCollection ? currentCollection.name : ''}
          </span>
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          Collections:{' '}
          <span style={{ color: 'black' }}>
            {collections ? collections.length : ''}
          </span>
        </Typography>
        <Grid>
          <KanbanAddButton
            onClick={() =>
              setIsOpenCollectionModal({ open: true, mode: 'create' })
            }
          >
            Collection
          </KanbanAddButton>
          <KanbanListButton
            onClick={() => setIsOpenCollectionsListModal(true)}
          ></KanbanListButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CollectionInformation);
