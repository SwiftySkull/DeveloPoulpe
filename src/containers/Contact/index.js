import { connect } from 'react-redux';

import { updateInputValue } from 'src/actions/mainActions';
import { submitRequest, submitAccepted } from 'src/actions/contactActions';

import Contact from 'src/components/Contact';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  fieldName: state.contact.fieldName,
  fieldEmail: state.contact.fieldEmail,
  fieldTel: state.contact.fieldTel,
  fieldSubject: state.contact.fieldSubject,
  fieldMessage: state.contact.fieldMessage,
  requestSent: state.contact.requestSent,
  submitButton: state.contact.submitButton,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Update the value of a field */
  updateInputValue: (field, value) => {
    dispatch(updateInputValue(field, value));
  },

  /** Submit and send the request */
  submitRequest: () => {
    dispatch(submitRequest());
  },

  /** Will display the submit button after Captcha is validated */
  submitAccepted: () => {
    dispatch(submitAccepted());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
