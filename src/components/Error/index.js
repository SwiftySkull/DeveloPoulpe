/* eslint-disable max-len */
// // == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './error.scss';

import tourbillon from 'src/assets/gif/tourbillon.gif';

import error from 'src/data/Languages-files/error';
import { Link } from 'react-router-dom';

// == Component which handles the movements of the seaweeds
/**
 * Error page component
 *
 * @param {string} language Language of the website
 * @param {function} closePresentation Close the informations of the presentation page when changing page
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Error = ({
  language,
  closePresentation,
  hideTopButton,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
    closePresentation();
  }, []);

  document.title = error[language].title;

  return (
    <div id="error">
      <h2>{error[language].h2}</h2>
      <div className="error">
        <img src={tourbillon} alt="" />
        <Link to="/"><button type="button">{error[language].back}</button></Link>
      </div>
    </div>
  );
};

Error.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Close the informations of the presentation page when changing page */
  closePresentation: PropTypes.func.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Error.defaultProps = {
  language: 'fr',
};

// == Export
export default Error;
