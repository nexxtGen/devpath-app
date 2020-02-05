import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  }
});

const LandingPage = ({ classes }) => {
  return (
    <div>
      <main className={classes.content}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel.
        </Typography>
      </main>
    </div>
  );
};

export default withStyles(styles)(LandingPage);
