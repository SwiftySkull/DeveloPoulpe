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
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Home = ({
  language,
  cookieStatus,
  hideTopButton,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();

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
          <p>{home[language].p1}</p>
          <p>{home[language].p2}</p>
          <p>{home[language].p3}</p>
          <p>{home[language].p4}</p>
        </div>
      </div>
      <h3 className="catch-phrase">{home[language].p5}</h3>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <UnderConstruction title="Website" />
      </div>
    </div>
  );
};

Home.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Home.defaultProps = {
  language: 'fr',
};

// == Export
export default Home;
