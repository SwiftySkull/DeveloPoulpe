// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

// == Import
// import legal from 'src/data/Languages-files/legal';

import './japanTours.scss';

// import japanVideo from 'public\assets\videos\Impressions Invites JTF web.mp4';

import {
  conventionVideoUrl,
} from 'src/data/urls';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const JapanTours = ({
  language,
  cookieStatus,
  bddTest,
  updateInputBDDValue,
  // hideTopButton,
  nameInput,
  descriptionInput,
  pictureInput,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    window.scroll(0, 0);
    // hideTopButton();

    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', conventionVideoUrl, '/Japan-Tours-Festival-2022');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  function testdebdd(evt) {
    evt.preventDefault();
    bddTest(evt);
  }

  return (
    <div id="japanTours">
      <h2>Japan Tours Festival 2022</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(evt) => testdebdd(evt)}>
        <label htmlFor="name-input">Nom de l'album</label>
        <input type="text" id="name-input" name="name-input" value={nameInput} onChange={(evt) => updateInputBDDValue('name-input', evt.target.value)} />
        <label htmlFor="description-input">Description de l'album</label>
        <textarea id="description-input" name="description-input" value={descriptionInput} onChange={(evt) => updateInputBDDValue('description-input', evt.target.value)} />
        <label htmlFor="picture-input">Photo de l'album</label>
        <input type="file" id="picture-input" name="picture-input" value={pictureInput} onChange={(evt) => updateInputBDDValue('picture-input', evt.target.value)} />
        <button type="submit" onSubmit={(evt) => testdebdd(evt)}>TEST BDD</button>
      </form>
      <div className="youtube-embed">
        <iframe src="https://www.youtube.com/embed/bn4F6U3jyJs" title="Japan Tours Festival 2022 Vidéo" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p><a href="https://www.youtube.com/embed/bn4F6U3jyJs" target="_blank" rel="noreferrer noopener">Japan Tours Festival 2022 Impressions des Invités</a></p>
      </div>
    </div>
  );
};

JapanTours.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Hide the Back-to-top button */
  // hideTopButton: PropTypes.func.isRequired,
};

JapanTours.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default JapanTours;
