// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import Algues from 'src/components/Algues';
import Bubble from 'src/components/Bubble';
import Contact from 'src/containers/Contact';
import Cookie from 'src/containers/Cookie';
import CookiePopup from 'src/containers/Cookie/CookiePopup';
import Error from 'src/containers/Error';
import Footer from 'src/containers/Footer';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Identity from 'src/containers/Identity';
import Lang from 'src/containers/Lang';
import Legal from 'src/containers/Legal';
import Projects from 'src/containers/Projects';
import SiteMap from 'src/containers/SiteMap';
import Stream from 'src/containers/Stream';
import TopButton from 'src/containers/TopButton';

import JapanTours from 'src/containers/JapanTours';

import './app.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  cookiesUrl,
  changeLangUrl,
  homeUrl,
  sitemapUrl,
  legalUrl,
  streamUrl,
  conventionVideoUrl,
} from 'src/data/urls';

// == Composant
/**
 * Application component
 *
 * @param {function} changeLanguage Functino to change the language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {function} acceptCookies Function to accept and close the cookie box
 * @param {function} displayTopButton Display the Back-to-top button
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const App = ({
  changeLanguage,
  cookieStatus,
  acceptCookies,
  displayTopButton,
  hideTopButton,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      acceptCookies();
      changeLanguage(cookies.get('lang'));
    }
    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('lang');
    }
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
        <Route path={projectUrl} element={<Projects />} />
        <Route path={conventionVideoUrl} element={<JapanTours />} />
        <Route path={streamUrl} element={<Stream />} />
        <Route path={identityUrl} element={<Identity />} />
        <Route path={contactUrl} element={<Contact />} />
        <Route path={cookiesUrl} element={<Cookie />} />
        <Route path={sitemapUrl} element={<SiteMap />} />
        <Route path={legalUrl} element={<Legal />} />
        <Route path={`${changeLangUrl}/:lang`} element={<Lang />} />
        <Route path={homeUrl} element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <CookiePopup />
      <TopButton />
      <Footer />
      <Bubble />
      <Algues />
    </div>
  );
};

App.propTypes = {
  /** Functino to change the language of the website */
  changeLanguage: PropTypes.func.isRequired,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Accept the cookies and set the cookies parameters
   * if cookies have already been accepted before */
  acceptCookies: PropTypes.func.isRequired,

  /** Display the Back-to-top button */
  displayTopButton: PropTypes.func.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

// App.defaultProps = {

// };

// == Export
export default App;
