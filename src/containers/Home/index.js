import { connect } from 'react-redux';

import { hideTopButton } from 'src/actions/mainActions';

import Home from 'src/components/Home';

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
  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
