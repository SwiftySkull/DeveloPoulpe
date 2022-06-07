import { connect } from 'react-redux';

import { updateInputValue, hideTopButton } from 'src/actions/mainActions';
import { submitAccepted, sendRequest } from 'src/actions/contactActions';

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

  /** Will display the submit button after Captcha is validated */
  submitAccepted: () => {
    dispatch(submitAccepted());
  },

  /** Submit and send the request */
  sendRequest: (form) => {
    dispatch(sendRequest(form));
  },

  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
