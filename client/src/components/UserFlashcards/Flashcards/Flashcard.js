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
import { connect } from 'react-redux';
import {
  setCurrentEditedFlashcard,
  deleteCurrentFlashcard
} from '../../../actions/flashcards';

const Flashcard = ({
  classes,
  card,
  open,
  setCurrentEditedFlashcard,
  deleteCurrentFlashcard
}) => {
  const { title, description, code, categoryId, _id } = card;

  const setHandleEdit = () => {
    const current = {
      title,
      description,
      code,
      categoryId,
      _id
    };

    setCurrentEditedFlashcard(current);
    open('edit');
  };
  const onChange = code => {};

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
            overflow: 'auto',
            width: '100%',
            marginBottom: 50
          }}
        />
      </Grid>
      <Grid className={classes.footer}>
        <Edit className={classes.icon} onClick={() => setHandleEdit()} />
        <DeleteOutline
          className={classes.icon}
          onClick={() => deleteCurrentFlashcard(_id, categoryId)}
        />
      </Grid>
    </Grid>
  );
};

Flashcard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  open: PropTypes.func.isRequired,
  setCurrentEditedFlashcard: PropTypes.func.isRequired,
  deleteCurrentFlashcard: PropTypes.func.isRequired
};

export default connect(null, {
  setCurrentEditedFlashcard,
  deleteCurrentFlashcard
})(withStyles(styles)(Flashcard));
