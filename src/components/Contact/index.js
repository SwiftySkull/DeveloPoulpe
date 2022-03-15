// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import './contact.scss';
import contact from 'src/data/Languages-files/contact';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 */
const Contact = ({
  language,
  cookieStatus,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', '/contact', '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  return (
    <div id="contact">
      <h1>{contact[language].title}</h1>
      <div className="contact-content">
        <p>{contact[language].p1}</p>
        <p>{contact[language].p2} <a href="mailto:aurelien.beneyton@developoulpe.fr">aurelien.beneyton@developoulpe.fr</a>.</p>
      </div>
      <form className="contac-form">
        <p>{contact[language].form_p3}</p>
        <p>{contact[language].form_p4}</p>
        <label htmlFor="field-name" className="label-name">
          <p>{contact[language].form.name}</p>
          <input id="field-name" className="input-field" type="text" />
        </label>
        <label htmlFor="field-email" className="label-email">
          <p>{contact[language].form.email}</p>
          <input id="field-email" className="input-field" type="email" />
        </label>
        <label htmlFor="field-tel" className="label-tel">
          <p>{contact[language].form.tel}</p>
          <input id="field-tel" className="input-field" type="tel" />
        </label>
        <label htmlFor="field-subject" className="label-subject">
          <p>{contact[language].form.subject}</p>
          <input id="field-subject" className="input-field" type="text" />
        </label>
        <label htmlFor="field-message" className="label-message">
          <p>{contact[language].form.message}</p>
          <textarea id="field-message" className="input-field" />
        </label>
        <button type="submit" className="contact-button">{contact[language].form.button}</button>
      </form>
    </div>
  );
};

Contact.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Contact;
