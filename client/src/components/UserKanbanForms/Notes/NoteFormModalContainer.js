import React from 'react';
//import NoteForm from './NoteForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
//mport createNoteValues from '../utilis/createNoteValues';
import { connect } from 'react-redux';
import {
  createNewUserKanbanNote,
  updateUserKanbanNote
} from '../../../actions/kanban';

const NoteFormModalContainer = ({
  open,
  setIsOpen,
  currentCollection,
  currentBoard,
  createNewUserKanbanNote,
  updateUserKanbanNote
}) => {
  const handleSubmitCreate = values => {
    createNewUserKanbanNote(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateUserKanbanNote(currentEditedNote._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createNoteValues(
    open.mode === 'edit' ? currentEditedNote : null,
    currentCollection ? currentCollection._id : null,
    currentBoard ? currentBoard._id : null,
    currentLane ? urrentLane._id : null
  );
  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Note' : 'Edit Note'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={noteSchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedNote._id)
            }
          >
            {FormikBag => (
              <NoteForm
                setIsOpen={setIsOpen}
                open={open}
                FormikBag={FormikBag}
              />
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const noteSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Note Name is required'),
  description: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(100, 'Maximum 100 characters')
    .required('Description is required'),
  image: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Note image link is required')
});

const mapStateToProps = state => ({
  currentEditedBoard: state.kanban.currentEditedBoard
});

export default connect(mapStateToProps, {
  createNewUserKanbanBoard,
  updateUserKanbanBoard
})(NoteFormModalContainer);
