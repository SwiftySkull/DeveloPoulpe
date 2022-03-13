// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import cookieImg from 'src/data/cookie';
import footer from 'src/data/Languages-files/footer';

import './footer.scss';

// == Composant
const Footer = ({
  language,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="footer">
      <a className="icons8" href="https://icons8.com/">{footer[language].icons}</a>
      <NavLink to="/cookies" className="cookie-text">{footer[language].title}</NavLink>
      <Link to="/cookies" className="cookie-button"><img src={cookieImg} alt="Cookie" /></Link>
    </div>
  );
};

Footer.propTypes = {
  language: PropTypes.string,
};

Footer.defaultProps = {
  language: 'fr',
};

// == Export
export default Footer;
