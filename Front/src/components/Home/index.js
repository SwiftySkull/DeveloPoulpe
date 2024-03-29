/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import home from 'src/data/Languages-files/home';

import swifty from 'src/assets/images/swifty.png';

import './home.scss';

import { contactUrl } from 'src/data/urls';

// == Composant
/**
 * Home component
 *
 * @param {string} language Language of the website
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Home = ({
  language,
  hideTopButton,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
  }, []);

  document.title = 'DeveloPoulpe';

  return (
    <div id="home">
      <div className="home">
        <h2>{home[language].title1}</h2>
        <h2>{home[language].title2}</h2>
        <div className="home-page">
          <div className="home-poulpe">
            <img className="home-poulpe-img" src={swifty} alt="Home Poulpe" />
          </div>
          <div className="home-introduction">
            <p>{home[language].p1}</p>
            <p>{home[language].p2}</p>
            <p>{home[language].p3}</p>
            <p>{home[language].p4}</p>
          </div>
        </div>
        <h3 className="catch-phrase">{home[language].p5}</h3>
      </div>
      <div className="services">
        <p>{home[language].services.main}</p>
        <ul>
          {home[language].services.list.map((li, id) => (
            <li key={id}>{li}</li>
          ))}
        </ul>
        <p>{home[language].services.form1}<Link title={home[language].infobulle} to={contactUrl}>{home[language].services.form2}</Link>.</p>
      </div>
    </div>
  );
};

Home.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Home.defaultProps = {
  language: 'fr',
};

// == Export
export default Home;
