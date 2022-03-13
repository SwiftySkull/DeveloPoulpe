import { connect } from 'react-redux';

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
  // loadElements: () => {
  //   dispatch(loadElements());
  // },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
