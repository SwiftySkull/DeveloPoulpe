// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import './contact.scss';
import contact from 'src/data/Languages-files/contact';
import { french, english } from 'src/data/languages';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 */
const Contact = ({
  language,
  cookieStatus,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', '/contact', '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="contact">
      <h1>{contact[language].title}</h1>
    </div>
  );
};

Contact.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Contact;
