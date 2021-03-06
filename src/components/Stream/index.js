// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Webcam from 'react-webcam';

// == Import
// import siteMap from 'src/data/Languages-files/siteMap';
// import header from 'src/data/Languages-files/header';

import './stream.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  cookiesUrl,
  homeUrl,
  sitemapUrl,
  legalUrl,
} from 'src/data/urls';
// import { createMarkup } from 'src/utils';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Stream = ({
  language,
  cookieStatus,
  hideTopButton,
  savepicture,
  pictureTaken,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();

    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', sitemapUrl, '/plan-du-site');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="stream">
      <h2>Stream</h2>
      <div className="stream-area">
        <Webcam
          // audio={true}
          // height={1080}
          // screenshotFormat="image/jpeg"
          // width={1920}
          videoConstraints={{
            // width: 1920,
            // height: 1080,
            facingMode: 'user',
          }}
          className="stream-cam"
        />
          {/* {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot();
                console.log(imageSrc);
                savepicture(imageSrc);
              }}
              type="button"
            >
              Capture photo
            </button>
          )} */}
        {/* </Webcam> */}
      </div>
      <div className="picture-taken">
        <img src={pictureTaken} alt="" />
      </div>
    </div>
  );
};

Stream.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,

  savepicture: PropTypes.func.isRequired,
};

Stream.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Stream;
