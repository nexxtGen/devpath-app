import React from 'react';
import LaneForm from './LaneForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import createLaneValues from '../utilis/createLaneValues';
import { connect } from 'react-redux';
import {
  createNewUserKanbanLane,
  updateUserKanbanLane
} from '../../../actions/kanban';

const LaneFormModalContainer = ({
  open,
  setIsOpen,
  currentCollection,
  currentBoard,
  currentEditedLane,
  createNewUserKanbanLane,
  updateUserKanbanLane
}) => {
  const handleSubmitCreate = values => {
    createNewUserKanbanLane(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateUserKanbanLane(currentEditedLane._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createLaneValues(
    open.mode === 'edit' ? currentEditedLane : null,
    currentCollection ? currentCollection._id : null,
    currentBoard ? currentBoard._id : null
  );
  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Lane' : 'Edit Lane'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={laneSchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedLane._id)
            }
          >
            {() => <LaneForm setIsOpen={setIsOpen} open={open} />}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const laneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Collection Name is required')
});

const mapStateToProps = state => ({
  currentEditedLane: state.kanban.currentEditedLane
});

export default connect(mapStateToProps, {
  createNewUserKanbanLane,
  updateUserKanbanLane
})(LaneFormModalContainer);
