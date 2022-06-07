// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import siteMap from 'src/data/Languages-files/siteMap';
import header from 'src/data/Languages-files/header';

import './siteMap.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  cookiesUrl,
  homeUrl,
  sitemapUrl,
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
const SiteMap = ({
  language,
  cookieStatus,
  hideTopButton,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();

    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', sitemapUrl, '/plan-du-site');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="siteMap">
      <h2>{siteMap[language].title}</h2>
      <ul>
        <li><Link to={homeUrl}>{header[language].home}</Link></li>
        <li><Link to={identityUrl}>{header[language].identity}</Link></li>
        <li><Link to={projectUrl}>{header[language].project}</Link></li>
        <li><Link to={contactUrl}>{header[language].contact}</Link></li>
        <li><Link to={cookiesUrl}>{header[language].cookies}</Link></li>
        <li><Link to={legalUrl}>{header[language].legal}</Link></li>
        <li><Link to={sitemapUrl}>{header[language].sitemap}</Link></li>
      </ul>
    </div>
  );
};

SiteMap.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

SiteMap.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default SiteMap;
