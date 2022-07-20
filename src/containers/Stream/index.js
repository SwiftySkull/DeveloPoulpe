import { connect } from 'react-redux';

import { hideTopButton, savepicture } from 'src/actions/mainActions';

import Stream from 'src/components/Stream';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  pictureTaken: state.main.pictureTaken,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },

  savepicture: (picture) => {
    dispatch(savepicture(picture));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Stream);
