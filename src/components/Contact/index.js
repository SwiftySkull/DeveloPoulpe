// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import ReCAPTCHA from 'react-google-recaptcha';

// == Import
import contact from 'src/data/Languages-files/contact';

import ContactModal from 'src/containers/Contact/ContactModal';

import './contact.scss';

import { contactUrl } from 'src/data/urls';

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
 * @param {boolean} requestSent Display or not the message sent information modal
 * @param {function} submitAccepted Captcha action to display the submit button
 * @param {boolean} submitButton Display status for the submit button
 * @param {function} sendRequest Send the form
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
  requestSent,
  submitAccepted,
  submitButton,
  sendRequest,
}) => {
  const cookies = new Cookies();

  useEffect(() => {
    if (cookieStatus || cookies.get('cookies-accept') === 'true') {
      cookies.set('url', contactUrl, '/');
    }

    if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
      cookies.remove('url');
    }
  }, []);

  /** Function to prevent the refresh of the page before sending the request */
  const sendTheRequest = (evt) => {
    evt.preventDefault();
    sendRequest(evt.target);
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
          <input name="name" required pattern="[a-zA-Z0-9' -]+" id="field-name" className="input-field" type="text" value={fieldName} onChange={(evt) => updateInputValue('fieldName', evt.target.value)} />
        </label>
        <label htmlFor="field-email" className="label-email">
          <p>{contact[language].form.email}</p>
          <input name="email" pattern="[a-zA-Z0-9-\.]+@[a-zA-Z0-9\.-]+\.[a-zA-Z0-9]+" id="field-email" className="input-field" type="email" value={fieldEmail} onChange={(evt) => updateInputValue('fieldEmail', evt.target.value)} />
        </label>
        <label htmlFor="field-tel" className="label-tel">
          <p>{contact[language].form.tel}</p>
          <input name="tel" pattern="[0-9]{10}" id="field-tel" className="input-field" type="tel" value={fieldTel} onChange={(evt) => updateInputValue('fieldTel', evt.target.value)} />
        </label>
        <label htmlFor="field-subject" className="label-subject">
          <p>{contact[language].form.subject}</p>
          <input name="subject" required pattern="[a-zA-Z0-9?!:' -]+" id="field-subject" className="input-field" type="text" value={fieldSubject} onChange={(evt) => updateInputValue('fieldSubject', evt.target.value)} />
        </label>
        <label htmlFor="field-message" className="label-message">
          <p>{contact[language].form.message}</p>
          <textarea name="message" required id="field-message" className="input-field" value={fieldMessage} onChange={(evt) => updateInputValue('fieldMessage', evt.target.value)} />
        </label>
        <ReCAPTCHA
          sitekey="6LdNtcYeAAAAAHz96KIH6RavkNPPAssjz26-n7EM"
          onChange={submitAccepted}
          className="captcha"
        />
        <div className="g-recaptcha" data-sitekey="6LdNtcYeAAAAAHz96KIH6RavkNPPAssjz26-n7EM" />
        {/* <button style={{ display: submitButton ? 'block' : 'none' }} type="submit" className="contact-button" onSubmit={sendTheRequest}>{contact[language].form.button}</button> */}
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

  /** Display or not the message sent information modal */
  requestSent: PropTypes.bool.isRequired,

  /** Captcha action to display the submit button */
  submitAccepted: PropTypes.func.isRequired,
  /** Display status for the submit button */
  submitButton: PropTypes.bool.isRequired,

  /** Send the form */
  sendRequest: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Contact;
