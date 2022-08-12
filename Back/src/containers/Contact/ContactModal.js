import { connect } from 'react-redux';

import { closeContactModal } from 'src/actions/contactActions';

import ContactModal from 'src/components/Contact/ContactModal';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  errorStatus: state.contact.errorStatus,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Close the modal box */
  closeContactModal: () => {
    dispatch(closeContactModal());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(ContactModal);
