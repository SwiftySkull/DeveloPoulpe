// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import cookiePopup from 'src/data/Languages-files/cookiePopup';
import cookieImg from 'src/data/cookie';

import './cookiePopup.scss';

// == Composant
/**
 * Cookie acceptation component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieBox Boolean to display or not the cookie box
 * @param {function} acceptCookies Function to accept and close the cookie box
 * @param {function} refuseCookies Function to refuse and close the cookie box
 */
const CookiePopup = ({
  language,
  cookieBox,
  acceptCookies,
  refuseCookies,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="cookiePopup" style={{ display: cookieBox ? 'none' : 'block' }}>
      <button type="button" className="cookie-button" onClick={acceptCookies}><img src={cookieImg} alt="Cookie" /></button>
      <p>{cookiePopup[language].p1}</p>
      <p>{cookiePopup[language].p2}</p>
      <p>{cookiePopup[language].p3}</p>
      <button type="button" className="close-button" onClick={acceptCookies}>+</button>
      <div className="cookie-choice">
        <button type="button" onClick={acceptCookies}>{cookiePopup[language].accept}</button>
        <button type="button" onClick={refuseCookies}>{cookiePopup[language].refuse}</button>
      </div>
    </div>
  );
};

CookiePopup.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to display or not the cookie box */
  cookieBox: PropTypes.bool.isRequired,

  /** Function to close the cookie box */
  acceptCookies: PropTypes.func.isRequired,

  /** Function when user refuses the cookies */
  refuseCookies: PropTypes.func.isRequired,
};

CookiePopup.defaultProps = {
  language: 'fr',
};

// == Export
export default CookiePopup;
