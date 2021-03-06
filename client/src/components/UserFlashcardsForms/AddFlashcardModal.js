import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import '../../shared/prism_v2.css';
import { primary } from '../../shared/colors';
import { connect } from 'react-redux';
import { createNewFlashcard } from '../../actions/flashcards';
import { updateCurrentFlashcard } from '../../actions/flashcards';

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
  categoriesList,
  createNewFlashcard,
  formMode,
  currentFlashcard,
  updateCurrentFlashcard
}) => {
  const [validationTitle, setValidationTitle] = useState('');
  const [validationDescription, setValidationDescription] = useState('');
  const [validationCategoryId, setValidationCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [code, setCode] = useState('Write your code here');
  const ref = React.createRef();

  useEffect(() => {
    if (formMode === 'edit') {
      setTitle(currentFlashcard.title);
      setDescription(currentFlashcard.description);
      setCategoryId(currentFlashcard.categoryId);
      setCode(currentFlashcard.code);
    }
    //eslint-disable-next-line
  }, [formMode]);

  const handleSubmitCreate = () => {
    if (title === '') {
      setValidationTitle('Required');
    } else if (description === '') {
      setValidationDescription('Required');
    } else if (categoryId === '') {
      setValidationCategoryId('Required');
    } else {
      const flashcard = { title, description, code, categoryId };
      createNewFlashcard(flashcard);
      handleClose();
      setTitle('');
      setDescription('');
      setCategoryId('');
      setCode('Write your code here');
    }
  };

  const handleSubmitUpdate = () => {
    if (title === '') {
      setValidationTitle('Required');
    } else if (description === '') {
      setValidationDescription('Required');
    } else if (categoryId === '') {
      setValidationCategoryId('Required');
    } else {
      const flashcard = { title, description, code, _id: currentFlashcard._id };
      updateCurrentFlashcard(flashcard);
      handleClose();
      setTitle('');
      setDescription('');
      setCategoryId('');
      setCode('Write your code here');
    }
  };

  const handleCloseModal = () => {
    setTitle('');
    setDescription('');
    setCategoryId('');
    setCode('Write your code here');
    setValidationTitle('');
    setValidationDescription('');
    setValidationCategoryId('');
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {formMode === 'create'
            ? 'Create New Flashcard'
            : 'Edit Current Flashcard'}
        </DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <InputLabel id='select-category'>Categories*</InputLabel>
            <Select
              labelId='select-category'
              id='flashcard-select-category'
              value={categoryId}
              onChange={e => setCategoryId(e.target.value)}
              style={{ width: 200 }}
              disabled={formMode === 'edit' ? true : false}
            >
              {!loading &&
                categoriesList !== null &&
                categoriesList.map(cat => (
                  <MenuItem ref={ref} key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
            </Select>
            <FormHelperText error>{validationCategoryId}</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
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
            <FormHelperText error>{validationTitle}</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <TextField
              multiline
              rowsMax='5'
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
            <FormHelperText error>{validationDescription}</FormHelperText>
          </FormControl>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            tabSize={4}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              overflow: 'auto',
              width: '100%',
              minHeight: 200,
              margin: '30px 0'
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            onClick={handleCloseModal}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            onClick={
              formMode === 'create' ? handleSubmitCreate : handleSubmitUpdate
            }
            color='primary'
          >
            {formMode === 'create' ? 'Add Flashcard' : 'Update Flashcard'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  categoriesList: state.flashcards.categoriesList,
  loading: state.flashcards.loading,
  currentFlashcard: state.flashcards.currentEditedFlashcard
});

export default connect(mapStateToProps, {
  createNewFlashcard,
  updateCurrentFlashcard
})(withStyles(styles)(AddFlashcardModal));
