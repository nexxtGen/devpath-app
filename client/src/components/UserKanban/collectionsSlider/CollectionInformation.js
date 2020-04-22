import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { primary } from '../../../shared/colors';

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
  setIsOpenCollectionModal
}) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.header}>
        <Typography variant='body1' color='textSecondary'>
          Current collection:{' '}
          <span style={{ color: 'black' }}>Valkyrie Tech</span>
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          Collections:{' '}
          <span style={{ color: 'black' }}>
            {collections ? collections.length : ''}
          </span>
        </Typography>
        <Button
          onClick={() =>
            setIsOpenCollectionModal({ open: true, mode: 'create' })
          }
          size='medium'
          variant='outlined'
        >
          Add Collection
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CollectionInformation);
