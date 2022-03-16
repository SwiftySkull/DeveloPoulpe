/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import identity from 'src/data/Languages-files/identity';
import identityImage from 'src/data/identity';
import swifty from 'src/assets/images/swifty.png';

import './identity.scss';

import { identityUrl } from 'src/data/urls';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {number} chosenForma ID of the formation chosen to see details
 * @param {function} openForma Open a formation informations
 * @param {function} closeForma Close a formation informations
 */
const Identity = ({
  language,
  cookieStatus,
  chosenForma,
  openForma,
  closeForma,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', identityUrl, '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  // const openForma = (evt) => {
  //   console.log(evt.target.value);
  // };

  // const closeForma = (evt) => {
  //   console.log(evt.target.value);
  // };

  function createMarkup(text) {
    return { __html: text };
  }

  return (
    <div id="identity">
      <div className="identity-title">
        <img className="first-identity" src={identityImage} alt="Identity" />
        <h2>{identity[language].title}</h2>
        <img className="second-identity" src={identityImage} alt="Identity" />
      </div>
      <div className="profile-picture">
        <img src={swifty} alt="Profile" />
      </div>
      <div className="presentation">
        <p><strong>{identity[language].name}</strong> : Aurélien Beneyton</p>
        <p><strong>{identity[language].nickname}</strong> : Swifty / Poulpy</p>
        <p><strong>{identity[language].birth}</strong> : 02/04/1994</p>
        <p><strong>{identity[language].home}</strong> : Saint-Brieuc</p>
        <div className="formation">
          <h3>Formations :</h3>
          <ul>
            {identity[language].formations.map((forma) => (
              <li className="one-forma" key={forma.id} id={`forma-${forma.id}`}>
                <h4>{forma.title}</h4>
                <button
                  type="button"
                  className={chosenForma !== forma.id ? 'forma-plus' : 'forma-plus close'}
                  value={forma.id}
                  onClick={(evt) => (
                    chosenForma !== forma.id ? openForma(evt) : closeForma(evt)
                  )}
                >+
                </button>
                {chosenForma !== forma.id && (
                  <button type="button" className="forma-plus-text" value={forma.id} onClick={openForma}>{identity[language].read_more}...</button>
                )}
                {chosenForma === forma.id && (
                  <button type="button" className="forma-plus-text" value={forma.id} onClick={closeForma}>{identity[language].read_less}...</button>
                )}
              </li>
            ))}
          </ul>
        </div>
        {chosenForma !== 0 && (
          <div className="one-forma-content">
            <h3>{identity[language].formations[chosenForma - 1]?.title}</h3>
            <div className="forma-content" dangerouslySetInnerHTML={createMarkup(identity[language].formations[chosenForma - 1]?.content)} />
          </div>
        )}
        <div className="description">
          <h3>Description :</h3>
          <p>
            Jeune développeur web
          </p>
        </div>
      </div>
    </div>
  );
};

Identity.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** ID of the formation chosen to see details */
  chosenForma: PropTypes.number.isRequired,

  openForma: PropTypes.func.isRequired,
  closeForma: PropTypes.func.isRequired,
};

Identity.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Identity;
