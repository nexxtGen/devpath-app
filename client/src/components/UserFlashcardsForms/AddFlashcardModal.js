import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  withStyles,
  createStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import '../../shared/prism_v2.css';
import { primary } from '../../shared/colors';
import { connect } from 'react-redux';

const styles = createStyles({
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  }
});

const AddFlashcardModal = ({
  classes,
  open,
  handleClose,
  loading,
  categoriesList
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [code, setCode] = useState('Write your code here');
  const ref = React.createRef();

  const handleSubmit = () => {
    const flashcard = { title, description, code, categoryId };
    console.log(flashcard);
    setTitle('');
    setDescription('');
    setCategoryId('');
    setCode('Write your code here');
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        style={{ padding: 20 }}
      >
        <DialogTitle id='form-dialog-title'>New flashcard</DialogTitle>
        <DialogContent>
          <DialogContentText>Create your own flashcard</DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel id='select-category'>Categories*</InputLabel>
            <Select
              labelId='select-category'
              id='flashcard-select-category'
              value={categoryId}
              onChange={e => setCategoryId(e.target.value)}
              style={{ width: 200 }}
            >
              {!loading &&
                categoriesList !== null &&
                categoriesList.map(cat => (
                  <MenuItem ref={ref} key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title*'
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
            InputProps={{
              classes: {
                underline: classes.underline
              }
            }}
          />
          <TextField
            multiline
            rowsMax='5'
            autoFocus
            margin='dense'
            id='description'
            label='Description*'
            value={description}
            onChange={e => setDescription(e.target.value)}
            fullWidth
            InputProps={{
              classes: {
                underline: classes.underline
              }
            }}
          />
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            tabSize={4}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              overflowY: 'scroll',
              width: '100%',
              height: 200,
              margin: '30px 0'
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Add FLashcard
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  categoriesList: state.flashcards.categoriesList,
  loading: state.flashcards.loading
});

export default connect(mapStateToProps)(withStyles(styles)(AddFlashcardModal));
