import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import { closeForma, closeExpe, closeOtherExpe } from 'src/actions/identityActions';

import { changeLanguage } from 'src/actions/mainActions';

import Header from 'src/components/Header';

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
  /**
   * Change the language of the website
   *
   * @param {string} language Language chosen by the user
   */
  changeLanguage: (language) => {
    const cookies = new Cookies();
    cookies.set('lang', language, '/');
    dispatch(changeLanguage(language));
  },

  /** Close the informations of the presentation page */
  closePresentation: () => {
    dispatch(closeForma());
    dispatch(closeExpe());
    dispatch(closeOtherExpe());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
