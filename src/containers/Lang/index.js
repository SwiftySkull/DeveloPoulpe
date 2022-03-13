import { connect } from 'react-redux';

import { changeLanguage } from 'src/actions/mainActions';

import Lang from 'src/components/Lang';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  // language: state.main.language,
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
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Lang);
