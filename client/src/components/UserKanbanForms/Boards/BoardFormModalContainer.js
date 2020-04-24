import React from 'react';
import BoardForm from './BoardForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import createBoardValues from '../utilis/createBoardValues';
import { connect } from 'react-redux';
import {
  createNewUserKanbanBoard,
  updateUserKanbanBoard
} from '../../../actions/kanban';

const BoardFormModalContainer = ({
  open,
  setIsOpen,
  currentCollection,
  currentEditedBoard,
  createNewUserKanbanBoard,
  updateUserKanbanBoard
}) => {
  const handleSubmitCreate = values => {
    console.log('CALUES CREATE', values);
    createNewUserKanbanBoard(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateUserKanbanBoard(currentEditedBoard._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createBoardValues(
    open.mode === 'edit' ? currentEditedBoard : null,
    currentCollection ? currentCollection._id : null
  );
  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Board' : 'Edit Board'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={boardSchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedBoard._id)
            }
          >
            {FormikBag => (
              <BoardForm
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

const boardSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Collection Name is required'),
  description: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(100, 'Maximum 100 characters')
    .required('Description is required'),
  image: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Collection image link is required')
});

const mapStateToProps = state => ({
  currentEditedBoard: state.kanban.currentEditedBoard
});

export default connect(mapStateToProps, {
  createNewUserKanbanBoard,
  updateUserKanbanBoard
})(BoardFormModalContainer);
