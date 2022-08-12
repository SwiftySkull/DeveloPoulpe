// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// == Import
import Albums from 'src/containers/Pictures/Albums';
import Algues from 'src/components/Algues';
import Bubble from 'src/components/Bubble';
import Contact from 'src/containers/Contact';
import Error from 'src/containers/Error';
import Footer from 'src/containers/Footer';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Identity from 'src/containers/Identity';
import Legal from 'src/containers/Legal';
import OneAlbum from 'src/containers/Pictures/OneAlbum';
import OnePicture from 'src/containers/Pictures/OnePicture';
import Projects from 'src/containers/Projects';
import SiteMap from 'src/containers/SiteMap';
import Stream from 'src/containers/Stream';
import TopButton from 'src/containers/TopButton';


import './app.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  homeUrl,
  sitemapUrl,
  legalUrl,
  streamUrl,
  albumsUrl,
  oneAlbumUrl,
  onePictureUrl,
} from 'src/data/urls';

// == Composant
/**
 * Application component
 *
 * @param {function} displayTopButton Display the Back-to-top button
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const App = ({
  displayTopButton,
  hideTopButton,
}) => {
  useEffect(() => {

  }, []);

  document.title = 'DeveloPoulpe';

  const scrollToTopButton = () => {
    const { scrollY } = window; // Don't get confused by what's scrolling - It's not the window

    if (scrollY >= 250) {
      displayTopButton();
    }
    else {
      hideTopButton();
    }
  };

  return (
    <div id="app" onWheel={scrollToTopButton} onScroll={scrollToTopButton}>
      <Header />
      <Routes>
        <Route path={`${onePictureUrl}/:id`} element={<OnePicture />} />
        <Route path={`${oneAlbumUrl}/:id/:name`} element={<OneAlbum />} />
        <Route path={projectUrl} element={<Projects />} />
        <Route path={albumsUrl} element={<Albums />} />
        <Route path={streamUrl} element={<Stream />} />
        <Route path={identityUrl} element={<Identity />} />
        <Route path={contactUrl} element={<Contact />} />
        <Route path={sitemapUrl} element={<SiteMap />} />
        <Route path={legalUrl} element={<Legal />} />
        <Route path={homeUrl} element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <TopButton />
      <Footer />
      <Bubble />
      <Algues />
    </div>
  );
};

App.propTypes = {
  /** Display the Back-to-top button */
  displayTopButton: PropTypes.func.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

// App.defaultProps = {

// };

// == Export
export default App;
