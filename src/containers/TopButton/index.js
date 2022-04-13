import { connect } from 'react-redux';

import { hideTopButton } from 'src/actions/mainActions';

import TopButton from 'src/components/TopButton';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  backToTopButton: state.main.backToTopButton,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Hide the back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(TopButton);
