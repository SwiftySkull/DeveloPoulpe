/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import dateFormat, { i18n } from 'dateformat';

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
 * @param {number} chosenExpe ID of the experience chosen to see details
 * @param {function} openExpe Open a experience informations
 * @param {function} closeExpe Close a experience informations
 * @param {number} chosenOtherExpe ID of the other experience chosen to see details
 * @param {function} openOtherExpe Open a other experience informations
 * @param {function} closeOtherExpe Close a other experience informations
 */
const Identity = ({
  language,
  cookieStatus,
  chosenForma,
  openForma,
  closeForma,
  chosenExpe,
  openExpe,
  closeExpe,
  chosenOtherExpe,
  openOtherExpe,
  closeOtherExpe,
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

  function createMarkup(text) {
    return { __html: text };
  }

  i18n.monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (language === 'fr') {
    i18n.monthNames = [
      'Jan',
      'Fev',
      'Mar',
      'Avr',
      'Mai',
      'Juin',
      'Juil',
      'Aout',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
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
        <div className="description">
          <h3>Description :</h3>
          <div className="bio" dangerouslySetInnerHTML={createMarkup(identity[language].bio)} />
        </div>
        <div className="formation">
          <h3>Formations :</h3>
          <ul>
            {identity[language].formations?.map((forma) => (
              <li className={chosenForma !== forma.id ? 'one-forma' : 'one-forma close'} key={forma.id} id={`forma-${forma.id}`}>
                <h4>{forma.title}</h4>
                <button
                  type="button"
                  className={chosenForma !== forma.id ? 'forma-plus' : 'forma-plus close'}
                  value={forma.id}
                  onClick={(evt) => (
                    chosenForma !== forma.id ? openForma(evt) : closeForma()
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
            <div className="what-I-learned">
              <h4>{identity[language].what_I_learned}</h4>
              <ul>
                {identity[language].formations[chosenForma - 1]?.learned?.map((skill, index) => (
                  <li className="skill" key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="experiences">
          <h3>{identity[language].experience_title} :</h3>
          <ul>
            {identity[language].experiences?.map((expe) => (
              <li className={chosenExpe !== expe.id ? 'one-expe' : 'one-expe close'} key={expe.id} id={`expe-${expe.id}`}>
                <h4>{expe.title}</h4>
                <h5>{expe.place}</h5>
                <button
                  type="button"
                  className={chosenExpe !== expe.id ? 'expe-plus' : 'expe-plus close'}
                  value={expe.id}
                  onClick={(evt) => (
                    chosenExpe !== expe.id ? openExpe(evt) : closeExpe()
                  )}
                >+
                </button>
                {chosenExpe !== expe.id && (
                  <button type="button" className="expe-plus-text" value={expe.id} onClick={openExpe}>{identity[language].read_more}...</button>
                )}
                {chosenExpe === expe.id && (
                  <button type="button" className="expe-plus-text" value={expe.id} onClick={closeExpe}>{identity[language].read_less}...</button>
                )}
              </li>
            ))}
          </ul>
        </div>
        {chosenExpe !== 0 && (
          <div className="one-expe-content">
            <h3>{identity[language].experiences[chosenExpe - 1]?.title}</h3>
            <h4>{identity[language].experiences[chosenExpe - 1]?.place}</h4>
            <p>{identity[language].start_in} {dateFormat(identity[language].experiences[chosenExpe - 1]?.start, 'mmmm yyyy')} -&gt; {identity[language].end_in} {dateFormat(identity[language].experiences[chosenExpe - 1]?.end, 'mmmm yyyy')}</p>
            <div className="expe-content" dangerouslySetInnerHTML={createMarkup(identity[language].experiences[chosenExpe - 1]?.content)} />
            <div className="what-I-learned">
              <h4>{identity[language].what_I_learned}</h4>
              <ul>
                {identity[language].experiences[chosenExpe - 1]?.learned?.map((skill, index) => (
                  <li className="skill" key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="other-experiences">
          <h3>{identity[language].other_experience_title} :</h3>
          <ul>
            {identity[language].other_experiences?.map((expe) => (
              <li className={chosenOtherExpe !== expe.id ? 'one-expe' : 'one-expe close'} key={expe.id} id={`expe-${expe.id}`}>
                <h4>{expe.title}</h4>
                <button
                  type="button"
                  className={chosenOtherExpe !== expe.id ? 'expe-plus' : 'expe-plus close'}
                  value={expe.id}
                  onClick={(evt) => (
                    chosenOtherExpe !== expe.id ? openOtherExpe(evt) : closeOtherExpe()
                  )}
                >+
                </button>
                {chosenOtherExpe !== expe.id && (
                  <button type="button" className="expe-plus-text" value={expe.id} onClick={openOtherExpe}>{identity[language].read_more}...</button>
                )}
                {chosenOtherExpe === expe.id && (
                  <button type="button" className="expe-plus-text" value={expe.id} onClick={closeOtherExpe}>{identity[language].read_less}...</button>
                )}
              </li>
            ))}
          </ul>
        </div>
        {chosenOtherExpe !== 0 && (
          <div className="one-expe-content">
            <h3>{identity[language].other_experiences[chosenOtherExpe - 1]?.title}</h3>
            <div className="expe-content" dangerouslySetInnerHTML={createMarkup(identity[language].other_experiences[chosenOtherExpe - 1]?.content)} />
            <div className="what-I-learned">
              <h4>{identity[language].what_I_learned}</h4>
              <ul>
                {identity[language].other_experiences[chosenOtherExpe - 1]?.learned?.map((skill, index) => (
                  <li className="skill" key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
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

  /** Open/close the informations of a formation */
  openForma: PropTypes.func.isRequired,
  closeForma: PropTypes.func.isRequired,

  /** ID of the experience chosen to see details */
  chosenExpe: PropTypes.number.isRequired,

  /** Open/close the informations of an experience */
  openExpe: PropTypes.func.isRequired,
  closeExpe: PropTypes.func.isRequired,

  /** ID of the other experience chosen to see details */
  chosenOtherExpe: PropTypes.number.isRequired,

  /** Open/close the informations of an other experience */
  openOtherExpe: PropTypes.func.isRequired,
  closeOtherExpe: PropTypes.func.isRequired,
};

Identity.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Identity;
