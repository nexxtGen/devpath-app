import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Alert as MUIAlert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const styles = createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: 30,
    width: '100%'
  },
  alert: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center'
  }
});

const Alert = ({ classes, alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Grid className={classes.container} key={alert.id}>
      <MUIAlert severity={alert.alertType} className={classes.alert}>
        {alert.msg}
      </MUIAlert>
    </Grid>
  ));

Alert.propTypes = {
  classes: PropTypes.object.isRequired,
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(mapStateToProps)(withStyles(styles)(Alert));
