import React from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import Editor from 'react-simple-code-editor';
import '../../../shared/prism_v2.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import styles from './flashcardStyles';
import { Edit, DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';

const Flashcard = ({ classes, card, open }) => {
  const onChange = code => {};

  const { title, description, code } = card;
  return (
    <Grid className={classes.container}>
      <Grid className={classes.arrow}></Grid>
      <Grid className={classes.header}>
        <Typography variant='h6'>{title}</Typography>
      </Grid>
      <Grid className={classes.divider}></Grid>
      <Grid className={classes.textContainer}>
        <Typography variant='body2'>{description}</Typography>
      </Grid>
      <Grid className={classes.divider}></Grid>
      <Grid className={classes.codeContainer}>
        <Editor
          value={code}
          onValueChange={code => onChange(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          tabSize={4}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            overflowY: 'scroll',
            width: '100%'
          }}
        />
      </Grid>
      <Grid className={classes.footer}>
        <Edit className={classes.icon} onClick={() => open('edit')} />
        <DeleteOutline className={classes.icon} />
      </Grid>
    </Grid>
  );
};

Flashcard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired
};

export default withStyles(styles)(Flashcard);
