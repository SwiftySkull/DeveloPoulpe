import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import { acceptCookies, refuseCookies } from 'src/actions/mainActions';

import Cookie from 'src/components/Cookie';

const cookies = new Cookies();

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
  /**
   * Closes the box when user accepts the cookies
   */
  acceptCookies: () => {
    cookies.set('cookies-accept', 'true');
    dispatch(acceptCookies());
  },

  /**
   * Function when the user refuses the cookies
   */
  refuseCookies: () => {
    cookies.remove('url');
    cookies.remove('lang');
    cookies.remove('cookies-accept');
    dispatch(refuseCookies());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Cookie);
