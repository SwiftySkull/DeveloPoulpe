import { connect } from 'react-redux';

import Projects from 'src/components/Projects';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
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
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
