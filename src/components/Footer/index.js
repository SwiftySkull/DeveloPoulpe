/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import cookieImg from 'src/data/cookie';
import footer from 'src/data/Languages-files/footer';
import header from 'src/data/Languages-files/header';

import './footer.scss';

import { cookiesUrl, sitemapUrl, legalUrl } from 'src/data/urls';

// == Composant
/**
 * Footer component
 *
 * @param {string} language Language of the website
 * @param {function} closePresentation Close the informations of the presentation page when changing page
 */
const Footer = ({
  language,
  closePresentation,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="footer">
      <Link to={sitemapUrl} onClick={closePresentation} className="site-map">{header[language].sitemap}</Link>
      <Link to={legalUrl} onClick={closePresentation} className="legal-mentions">{header[language].legal}</Link>
      <NavLink to={cookiesUrl} onClick={closePresentation} className="cookie-text">{footer[language].title}</NavLink>
      <Link to={cookiesUrl} onClick={closePresentation} className="cookie-button"><img src={cookieImg} alt="Cookie" /></Link>
      <a className="icons8" href="https://icons8.com/" target="_blank" rel="noreferrer noopener">{footer[language].icons}</a>
    </div>
  );
};

Footer.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Close the informations of the presentation page when changing page */
  closePresentation: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  language: 'fr',
};

// == Export
export default Footer;
