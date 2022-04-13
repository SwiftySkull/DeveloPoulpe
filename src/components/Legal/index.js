// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import UnderConstruction from 'src/components/UnderConstruction';
import legal from 'src/data/Languages-files/legal';

import './legal.scss';

import {
  legalUrl,
} from 'src/data/urls';
// import { createMarkup } from 'src/utils';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Legal = ({
  language,
  cookieStatus,
  hideTopButton,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();

    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', legalUrl, '/mentions-legales');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="siteMap">
      <h2>{legal[language].title}</h2>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <UnderConstruction title={legal[language].title} />
      </div>
    </div>
  );
};

Legal.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Legal.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Legal;
