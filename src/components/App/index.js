// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import Contact from 'src/containers/Contact';
import Cookie from 'src/containers/Cookie';
import CookiePopup from 'src/containers/Cookie/CookiePopup';
import Home from 'src/containers/Home';
import Header from 'src/containers/Header';
import Identity from 'src/containers/Identity';
import Footer from 'src/containers/Footer';
import Lang from 'src/containers/Lang';
import Projects from 'src/containers/Projects';
import TopButton from 'src/components/TopButton';

import './app.scss';

import {
  projectUrl,
  identityUrl,
  contactUrl,
  cookiesUrl,
  changeLangUrl,
  homeUrl,
} from 'src/data/urls';

// == Composant
const App = ({
  changeLanguage,
  cookieStatus,
  acceptCookies,
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

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={projectUrl} element={<Projects />} />
        <Route path={identityUrl} element={<Identity />} />
        <Route path={contactUrl} element={<Contact />} />
        <Route path={cookiesUrl} element={<Cookie />} />
        <Route path={`${changeLangUrl}/:lang`} element={<Lang />} />
        <Route path={homeUrl} element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <CookiePopup />
      <TopButton />
      <Footer />
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
};

App.defaultProps = {

};

// == Export
export default App;
