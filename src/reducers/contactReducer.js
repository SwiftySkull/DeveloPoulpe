import {
  UPDATE_FIELD_VALUE,
} from 'src/actions/mainActions';

import {
  REQUEST_SENT,
} from 'src/actions/contactActions';

const initialState = {
  fieldName: '',
  fieldEmail: '',
  fieldTel: '',
  fieldSubject: '',
  fieldMessage: '',
  requestSent: false,
};

/**
 * Reducer for the main events.
 */
function contactReducer(state = initialState, action) {
  switch (action.type) {
    /** Update the value of the form fields */
    case UPDATE_FIELD_VALUE:
      return {
        ...state,
        fieldName: action.field === 'fieldName' ? action.value : state.fieldName,
        fieldEmail: action.field === 'fieldEmail' ? action.value : state.fieldEmail,
        fieldTel: action.field === 'fieldTel' ? action.value : state.fieldTel,
        fieldSubject: action.field === 'fieldSubject' ? action.value : state.fieldSubject,
        fieldMessage: action.field === 'fieldMessage' ? action.value : state.fieldMessage,
      };

    /** Display the modal message to inform the request is sent */
    case REQUEST_SENT:
      return {
        ...state,
        requestSent: true,
      };

    default:
      return state;
  }
}

export default contactReducer;
