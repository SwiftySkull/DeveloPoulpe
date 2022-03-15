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
import Footer from 'src/containers/Footer';
import Lang from 'src/containers/Lang';
import Projects from 'src/containers/Projects';
import Services from 'src/containers/Services';

import './app.scss';

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
        <Route path="/projets" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/lang/:lang" element={<Lang />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <CookiePopup />
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