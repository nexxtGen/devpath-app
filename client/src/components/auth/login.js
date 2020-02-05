import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  }
});

const LoginUser = ({ classes }) => {
  return (
    <div>
      <main className={classes.content}>
        <h3>Login user</h3>
        <h3>Login user</h3>
        <h3>Login user</h3>
        <h3>Login user</h3>
      </main>
    </div>
  );
};

export default withStyles(styles)(LoginUser);
