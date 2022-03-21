// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import './topButton.scss';

import topArrow from 'src/data/topArrow';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 */
const TopButton = ({

}) => {
  useEffect(() => {

  }, []);

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <button type="button" id="topButton" onClick={scrollToTop}>
      <img src={topArrow} alt="Button To Top" />
    </button>
  );
};

TopButton.propTypes = {
};

TopButton.defaultProps = {
};

// == Export
export default TopButton;
