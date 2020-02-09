import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = createStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  }
});

const LandingPageContainer = ({ classes, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/main' />;
  }

  return (
    <div>
      <main className={classes.content}>
        <h3>Landing page content</h3>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel.
        </Typography>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LandingPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(
  withStyles(styles)(LandingPageContainer)
);
