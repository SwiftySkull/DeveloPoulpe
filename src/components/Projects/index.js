// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import projects from 'src/data/Languages-files/projects';

import './projects.scss';

import { projectUrl } from 'src/data/urls';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 */
const Projects = ({
  language,
  cookieStatus,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', projectUrl, '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="projects">
      <h1>{projects[language].title}</h1>
    </div>
  );
};

Projects.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

Projects.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Projects;
