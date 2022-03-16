// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import header from 'src/data/Languages-files/header';
import { french, english } from 'src/data/languages';

import './header.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  cookiesUrl,
  changeLangUrl,
  homeUrl,
} from 'src/data/urls';

// == Composant
/**
 * Header component
 *
 * @param {string} language Language of the website
 * @param {function} changeLanguage Function to change the language
 */
const Header = ({
  language,
  changeLanguage,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="header">
      <nav>
        <div>
          <NavLink to={homeUrl}>{header[language].home}</NavLink>
          <NavLink to={identityUrl}>{header[language].identity}</NavLink>
        </div>
        <h1>
          <NavLink to={homeUrl} className="title">
            DeveloPoulpe
          </NavLink>
        </h1>
        <div>
          <NavLink to={projectUrl}>{header[language].project}</NavLink>
          <NavLink to={contactUrl}>{header[language].contact}</NavLink>
        </div>
      </nav>
      <Link to={`${changeLangUrl}/fr`} className="language french"><img src={french} alt="Langue française" onClick={() => changeLanguage('fr')} /></Link>
      <Link to={`${changeLangUrl}/en`} className="language english"><img src={english} alt="English language" onClick={() => changeLanguage('en')} /></Link>
    </div>
  );
};

Header.propTypes = {
  /** Language of the website */
  language: PropTypes.string,
  /** Function to change the language */
  changeLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Header;
