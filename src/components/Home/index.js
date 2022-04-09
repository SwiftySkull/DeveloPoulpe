// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import home from 'src/data/Languages-files/home';
import UnderConstruction from 'src/components/UnderConstruction';

import homePoulpe from 'src/assets/images/home-poulpe.jpg';

import './home.scss';

import { homeUrl } from 'src/data/urls';

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
      cookies.set('url', homeUrl, '/');
    }
    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  document.title = 'DeveloPoulpe';

  return (
    <div id="home">
      <h2>{home[language].title1}</h2>
      <h2>{home[language].title2}</h2>
      <div className="home-page">
        <div className="home-poulpe">
          <img className="home-poulpe-img" src={homePoulpe} alt="Home Poulpe" />
        </div>
        <div className="home-introduction">
          <p>Développeur Web FullStack sensible à l'accessibilité.</p>
          <p>Je construit des sites uniques entièrement à la main.</p>
          <p>Je peux aussi remettre à neuf un site et le mettre à jour.</p>
          <p>Photographe amateur je peux me déplacer pour rendre un projet encore plus unique.</p>
        </div>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <UnderConstruction />
      </div>
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
