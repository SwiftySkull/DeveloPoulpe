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
 */
const Cookie = ({
  language,
  cookieStatus,
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
    </div>
  );
};

Cookie.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

Cookie.defaultProps = {
  language: 'fr',
};

// == Export
export default Cookie;
