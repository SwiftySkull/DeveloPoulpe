import { connect } from 'react-redux';

import {
  displayTopButton,
  hideTopButton,
} from 'src/actions/mainActions';

import App from 'src/components/App';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({

});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Display the Back-to-top button */
  displayTopButton: () => {
    dispatch(displayTopButton());
  },

  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
