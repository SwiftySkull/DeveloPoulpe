// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Link, useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import

// == Composant
/**
 * Header component
 *
 * @param {function} changeLanguage Function to change the language
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 */
const Lang = ({
  changeLanguage,
  cookieStatus,
}) => {
  const { lang } = useParams();
  const cookies = new Cookies();

  useEffect(() => {
    if (lang === 'fr') {
      changeLanguage('fr');
      if (cookieStatus || cookies.get('cookies-accept') === 'true') {
        cookies.set('lang', 'fr', '/');
      }
      if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
        cookies.remove('lang');
      }
    }

    if (lang === 'en') {
      changeLanguage('en');

      if (cookieStatus || cookies.get('cookies-accept') === 'true') {
        cookies.set('lang', 'en', '/');
      }
      if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
        cookies.remove('lang');
      }
    }
  }, []);

  return (
    <Navigate to={cookies.get('url') ?? '/'} />
  );
};

Lang.propTypes = {
  /** Function to change the language */
  changeLanguage: PropTypes.func.isRequired,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

// Lang.defaultProps = {
//   /** Default language in French */
//   language: 'fr',
// };

// == Export
export default Lang;
