import { connect } from 'react-redux';

import { closeForma, closeExpe, closeOtherExpe } from 'src/actions/identityActions';

import Footer from 'src/components/Footer';

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
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
