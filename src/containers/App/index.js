import { connect } from 'react-redux';

import {
  changeLanguage,
  acceptCookies,
  displayTopButton,
  hideTopButton,
} from 'src/actions/mainActions';

import App from 'src/components/App';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  cookieStatus: state.main.cookieStatus,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Change the language of the website
   *
   * @param {string} language Language chosen by the user
   */
  changeLanguage: (language) => {
    dispatch(changeLanguage(language));
  },

  /**
   * Closes the box when user accepts the cookies
   */
  acceptCookies: () => {
    dispatch(acceptCookies());
  },

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
