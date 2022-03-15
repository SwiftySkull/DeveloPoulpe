// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import contact from 'src/data/Languages-files/contact';

import ContactModal from 'src/containers/Contact/ContactModal';

import './contact.scss';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {string} fieldName Value of the input Name
 * @param {string} fieldEmail Value of the input Email
 * @param {string} fieldTel Value of the input Tel
 * @param {string} fieldSubject Value of the input Subject
 * @param {string} fieldMessage Value of the input Message
 * @param {function} updateInputValue Function to update the value of the input
 * @param {function} submitRequest Function to submit and send the request
 * @param {boolean} requestSent Display or not the message sent information modal
 */
const Contact = ({
  language,
  cookieStatus,
  fieldName,
  fieldEmail,
  fieldTel,
  fieldSubject,
  fieldMessage,
  updateInputValue,
  submitRequest,
  requestSent,
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

  /** Function to prevent the refresh of the page before sending the request */
  const sendTheRequest = (evt) => {
    evt.preventDefault();
    submitRequest();
  };

  return (
    <div id="contact">
      <h1>{contact[language].title}</h1>
      <div className="contact-content">
        <p>{contact[language].p1}</p>
        <p>{contact[language].p2} <a href="mailto:aurelien.beneyton@developoulpe.fr">aurelien.beneyton@developoulpe.fr</a>.</p>
      </div>
      <form className="contac-form" onSubmit={sendTheRequest}>
        <p>{contact[language].form_p3}</p>
        <p>{contact[language].form_p4}</p>
        <label htmlFor="field-name" className="label-name">
          <p>{contact[language].form.name}</p>
          <input required pattern="[a-zA-Z0-9'-]+" id="field-name" className="input-field" type="text" value={fieldName} onChange={(evt) => updateInputValue('fieldName', evt.target.value)} />
        </label>
        <label htmlFor="field-email" className="label-email">
          <p>{contact[language].form.email}</p>
          <input pattern="[a-zA-Z0-9-\.]+@[a-zA-Z0-9\.-]+\.[a-zA-Z0-9]+" id="field-email" className="input-field" type="email" value={fieldEmail} onChange={(evt) => updateInputValue('fieldEmail', evt.target.value)} />
        </label>
        <label htmlFor="field-tel" className="label-tel">
          <p>{contact[language].form.tel}</p>
          <input pattern="[0-9]{10}" id="field-tel" className="input-field" type="tel" value={fieldTel} onChange={(evt) => updateInputValue('fieldTel', evt.target.value)} />
        </label>
        <label htmlFor="field-subject" className="label-subject">
          <p>{contact[language].form.subject}</p>
          <input required pattern="[a-zA-Z0-9\?!:\-']+" id="field-subject" className="input-field" type="text" value={fieldSubject} onChange={(evt) => updateInputValue('fieldSubject', evt.target.value)} />
        </label>
        <label htmlFor="field-message" className="label-message">
          <p>{contact[language].form.message}</p>
          <textarea required id="field-message" className="input-field" value={fieldMessage} onChange={(evt) => updateInputValue('fieldMessage', evt.target.value)} />
        </label>
        <button type="submit" className="contact-button" onSubmit={sendTheRequest}>{contact[language].form.button}</button>
      </form>
      <ContactModal display={requestSent} />
    </div>
  );
};

Contact.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Boolean to determine if cookies are accepted or not */
  cookieStatus: PropTypes.bool.isRequired,

  /** Field values for the form */
  fieldName: PropTypes.string.isRequired,
  fieldEmail: PropTypes.string.isRequired,
  fieldTel: PropTypes.string.isRequired,
  fieldSubject: PropTypes.string.isRequired,
  fieldMessage: PropTypes.string.isRequired,

  /** Function to update the value of the input */
  updateInputValue: PropTypes.func.isRequired,

  /** Function to submit the request */
  submitRequest: PropTypes.func.isRequired,

  /** Display or not the message sent information modal */
  requestSent: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Contact;
