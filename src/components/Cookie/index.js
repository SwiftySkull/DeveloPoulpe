// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import cookie from 'src/data/Languages-files/cookie';
import cookieImg from 'src/data/cookie';

import './cookie.scss';

// == Composant
/**
 * Cookie acceptation component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean if cookies are accepted or not
 * @param {function} acceptCookies Function to accept and close the cookie box
 * @param {function} refuseCookies Function to refuse and close the cookie box
 */
const Cookie = ({
  language,
  cookieStatus,
  acceptCookies,
  refuseCookies,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', '/cookies', '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="cookie">
      <div className="cookie-title">
        <img className="first-cookie" src={cookieImg} alt="Cookie" />
        <h1>{cookie[language].title}</h1>
        <img className="second-cookie" src={cookieImg} alt="Cookie" />
      </div>
      <div className="cookie-content">
        <p>{cookie[language].p1}</p>
        <p>{cookie[language].p2}</p>
        <ul>
          {cookie[language].cookiesList.map((cook, index) => (
            <li key={index}>{cook}</li>
          ))}
        </ul>
      </div>
      <p className="cookie-status">{cookies.get('cookies-accept') === 'true' ? cookie[language].cookiesAre[1] : cookie[language].cookiesAre[0]}</p>
      <div className="cookie-choice">
        <button type="button" onClick={acceptCookies}>{cookie[language].accept}</button>
        <button type="button" onClick={refuseCookies}>{cookie[language].refuse}</button>
      </div>
    </div>
  );
};

Cookie.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Function to close the cookie box */
  acceptCookies: PropTypes.func.isRequired,

  /** Function when user refuses the cookies */
  refuseCookies: PropTypes.func.isRequired,
};

Cookie.defaultProps = {
  language: 'fr',
};

// == Export
export default Cookie;
