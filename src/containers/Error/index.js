import { connect } from 'react-redux';

import { hideTopButton } from 'src/actions/mainActions';
import { closeForma, closeExpe, closeOtherExpe } from 'src/actions/identityActions';

import Error from 'src/components/Error';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Close the informations of the presentation page */
  closePresentation: () => {
    dispatch(closeForma());
    dispatch(closeExpe());
    dispatch(closeOtherExpe());
  },

  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Error);
