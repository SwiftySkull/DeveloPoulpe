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
import instagram from 'src/data/instagram';
import discord from 'src/data/discord';
import linkedin from 'src/data/linkedin';
import github from 'src/data/github';
import facebook from 'src/data/facebook';

import './identity.scss';

import { identityUrl } from 'src/data/urls';
import { createMarkup } from 'src/utils';

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
      </div>
      <div className="description">
        <h3>Description :</h3>
        <div className="bio" dangerouslySetInnerHTML={createMarkup(identity[language].bio)} />
      </div>
      <div className="formation identity-bloc">
        <h3>Formations :</h3>
        <ul>
          {identity[language].formations?.map((forma) => (
            <li className={chosenForma !== forma.id ? 'identity-bloc-one one-forma' : 'identity-bloc-one one-forma close'} key={forma.id} id={`forma-${forma.id}`}>
              <h4>{forma.title}</h4>
              <button
                type="button"
                className={chosenForma !== forma.id ? 'identity-bloc-plus forma-plus' : 'identity-bloc-plus forma-plus close'}
                value={forma.id}
                onClick={(evt) => (
                  chosenForma !== forma.id ? openForma(evt) : closeForma()
                )}
              >+
              </button>
              {chosenForma !== forma.id && (
              <button type="button" className="identity-bloc-text forma-plus-text" value={forma.id} onClick={openForma}>{identity[language].read_more}...</button>
              )}
              {chosenForma === forma.id && (
              <button type="button" className="identity-bloc-text forma-plus-text" value={forma.id} onClick={closeForma}>{identity[language].read_less}...</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {chosenForma !== 0 && (
      <div className="identity-one one-forma-content">
        <h3>{identity[language].formations[chosenForma - 1]?.title}</h3>
        <div className="identity-one-content forma-content" dangerouslySetInnerHTML={createMarkup(identity[language].formations[chosenForma - 1]?.content)} />
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
      <div className="experiences identity-bloc">
        <h3>{identity[language].experience_title} :</h3>
        <ul>
          {identity[language].experiences?.map((expe) => (
            <li className={chosenExpe !== expe.id ? 'identity-bloc-one one-expe' : 'identity-bloc-one one-expe close'} key={expe.id} id={`expe-${expe.id}`}>
              <h4>{expe.title}</h4>
              <h5>{expe.place}</h5>
              <button
                type="button"
                className={chosenExpe !== expe.id ? 'identity-bloc-plus expe-plus' : 'identity-bloc-plus expe-plus close'}
                value={expe.id}
                onClick={(evt) => (
                  chosenExpe !== expe.id ? openExpe(evt) : closeExpe()
                )}
              >+
              </button>
              {chosenExpe !== expe.id && (
              <button type="button" className="identity-bloc-text expe-plus-text" value={expe.id} onClick={openExpe}>{identity[language].read_more}...</button>
              )}
              {chosenExpe === expe.id && (
              <button type="button" className="identity-bloc-text expe-plus-text" value={expe.id} onClick={closeExpe}>{identity[language].read_less}...</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {chosenExpe !== 0 && (
      <div className="identity-one one-expe-content">
        <h3>{identity[language].experiences[chosenExpe - 1]?.title}</h3>
        <h4>{identity[language].experiences[chosenExpe - 1]?.place}</h4>
        <p>{identity[language].start_in} {dateFormat(identity[language].experiences[chosenExpe - 1]?.start, 'mmmm yyyy')} -&gt; {identity[language].end_in} {dateFormat(identity[language].experiences[chosenExpe - 1]?.end, 'mmmm yyyy')}</p>
        <div className="identity-one-content expe-content" dangerouslySetInnerHTML={createMarkup(identity[language].experiences[chosenExpe - 1]?.content)} />
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
      <div className="other-experiences identity-bloc">
        <h3>{identity[language].other_experience_title} :</h3>
        <ul>
          {identity[language].other_experiences?.map((expe) => (
            <li className={chosenOtherExpe !== expe.id ? 'identity-bloc-one one-expe' : 'identity-bloc-one one-expe close'} key={expe.id} id={`expe-${expe.id}`}>
              <h4>{expe.title}</h4>
              <button
                type="button"
                className={chosenOtherExpe !== expe.id ? 'identity-bloc-plus expe-plus' : 'identity-bloc-plus expe-plus close'}
                value={expe.id}
                onClick={(evt) => (
                  chosenOtherExpe !== expe.id ? openOtherExpe(evt) : closeOtherExpe()
                )}
              >+
              </button>
              {chosenOtherExpe !== expe.id && (
              <button type="button" className="identity-bloc-text expe-plus-text" value={expe.id} onClick={openOtherExpe}>{identity[language].read_more}...</button>
              )}
              {chosenOtherExpe === expe.id && (
              <button type="button" className="identity-bloc-text expe-plus-text" value={expe.id} onClick={closeOtherExpe}>{identity[language].read_less}...</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {chosenOtherExpe !== 0 && (
      <div className="identity-one one-other-expe-content">
        <h3>{identity[language].other_experiences[chosenOtherExpe - 1]?.title}</h3>
        <div className="identity-one-content other-expe-content" dangerouslySetInnerHTML={createMarkup(identity[language].other_experiences[chosenOtherExpe - 1]?.content)} />
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
      <div className="socials">
        <h3>{language === 'fr' ? 'Réseaux sociaux :' : 'Social Networks :'}</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/aurelien-b/" target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="" /><p>Aurelien Beneyton</p></a>
          <a href="https://www.instagram.com/swiftyskull/" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="" /><p>SwiftySkull</p></a>
          <a href="https://github.com/SwiftySkull" target="_blank" rel="noreferrer noopener"><img src={github} alt="" /><p>SwiftySkull</p></a>
          <a href="https://www.facebook.com/Swift741" target="_blank" rel="noreferrer noopener"><img src={facebook} alt="" /><p>Swift741</p></a>
          <a href="https://discord.gg/PexTDZgGmD" target="_blank" rel="noreferrer noopener"><img src={discord} alt="" /><p>SwiftySkull#2054</p></a>
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
