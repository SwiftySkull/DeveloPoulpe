/* eslint-disable max-len */
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
  changeLangUrl,
  homeUrl,
} from 'src/data/urls';

// == Composant
/**
 * Header component
 *
 * @param {string} language Language of the website
 * @param {function} changeLanguage Function to change the language
 * @param {function} closePresentation Close the informations of the presentation page when changing page
 * @param {function} changeMenu Change the status of the menu to open/close it
 * @param {boolean} menuStatus Status of the menu
 */
const Header = ({
  language,
  changeLanguage,
  closePresentation,
  changeMenu,
  menuStatus,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="header">
      <nav className="nav-small">
        <h1>
          <NavLink onClick={closePresentation} to={homeUrl} className="title">
            DeveloPoulpe
          </NavLink>
        </h1>
        <div className={menuStatus ? 'nav-small-infos' : 'nav-small-infos close'}>
          <NavLink onClick={closePresentation} to={homeUrl}>{header[language].home}</NavLink>
          <NavLink onClick={closePresentation} to={projectUrl}>{header[language].project}</NavLink>
          <NavLink onClick={closePresentation} to={identityUrl}>{header[language].identity}</NavLink>
          <NavLink onClick={closePresentation} to={contactUrl}>{header[language].contact}</NavLink>
        </div>
        <button type="button" className={!menuStatus ? 'open-menu' : 'close-menu'} onClick={() => changeMenu(!menuStatus)}>
          <div className="bar first-bar" />
          <div className="bar second-bar" />
          <div className="bar third-bar" />
        </button>
      </nav>
      <nav className="nav-big">
        <div>
          <NavLink onClick={closePresentation} to={homeUrl}>{header[language].home}</NavLink>
          <NavLink onClick={closePresentation} to={projectUrl}>{header[language].project}</NavLink>
        </div>
        <h1>
          <NavLink onClick={closePresentation} to={homeUrl} className="title">
            DeveloPoulpe
          </NavLink>
        </h1>
        <div>
          <NavLink onClick={closePresentation} to={identityUrl}>{header[language].identity}</NavLink>
          <NavLink onClick={closePresentation} to={contactUrl}>{header[language].contact}</NavLink>
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

  /** Close the informations of the presentation page when changing page */
  closePresentation: PropTypes.func.isRequired,

  /** Open/Close the menu */
  changeMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Header;
