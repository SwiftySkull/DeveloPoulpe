import {
  UPDATE_FIELD_VALUE,
} from 'src/actions/mainActions';

import {
  REQUEST_SENT,
  CLOSE_CONTACT_MODAL,
} from 'src/actions/contactActions';

const initialState = {
  fieldName: '',
  fieldEmail: '',
  fieldTel: '',
  fieldSubject: '',
  fieldMessage: '',
  requestSent: false,
  errorStatus: 0,
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
        fieldName: '',
        fieldEmail: '',
        fieldTel: '',
        fieldSubject: '',
        fieldMessage: '',
        errorStatus: 200,
      };

      /** Close the modal message to inform the request is sent */
    case CLOSE_CONTACT_MODAL:
      return {
        ...state,
        requestSent: false,
        errorStatus: 0,
      };

    default:
      return state;
  }
}

export default contactReducer;
