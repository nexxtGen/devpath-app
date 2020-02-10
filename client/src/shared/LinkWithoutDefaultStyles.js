import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  link: { textDecoration: 'none', color: 'inherit' }
});

const LinkWithoutDefaultStyles = ({ classes, to, children }) => {
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
};

export default withStyles(styles)(LinkWithoutDefaultStyles);
