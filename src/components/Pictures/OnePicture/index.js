// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './onePicture.scss';

import {
  dbbUrl,
} from 'src/data/urls';

// import japanVideo from 'public\assets\videos\Impressions Invites JTF web.mp4';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const OnePicture = ({
  language,
  hideTopButton,
  albums,
  loadAlbums,
  openAddMenu,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
    loadAlbums();
  }, []);

  return (
    <div id="onePicture">
      <h2>Photo</h2>
    </div>
  );
};

OnePicture.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  openAddMenu: PropTypes.func.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

OnePicture.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default OnePicture;
