// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import home from 'src/data/Languages-files/home';

import './home.scss';

// == Composant
/**
 * Home component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 */
const Home = ({
  language,
  cookieStatus,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', '/', '/');
    }
    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  document.title = 'DeveloPoulpe';

  return (
    <div id="home">
      <p>{home[language].title}</p>
    </div>
  );
};

Home.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  language: 'fr',
};

// == Export
export default Home;
