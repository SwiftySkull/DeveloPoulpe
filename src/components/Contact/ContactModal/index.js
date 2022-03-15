// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import './contactModal.scss';
import contactModal from 'src/data/Languages-files/contactModal';

// == Composant
/**
 * ContactModal page component
 *
 * @param {string} language Language of the website
 * @param {boolean} display Display or not the message sent information modal
 * @param {function} closeContactModal Close the modal box
 * @param {number} errorStatus Error number status to display to select the good message to display
 */
const ContactModal = ({
  language,
  display,
  closeContactModal,
  errorStatus,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="contactModal" style={{ display: display ? 'block' : 'none' }}>
      <div className="modal">
        <button type="button" className="close-button-modal" onClick={closeContactModal}>
          +
        </button>
        {errorStatus === 200 && (
          <p className="message-modal first-message">{contactModal[language].success}</p>
        )}
        {errorStatus === 400 && (
          <>
            <p className="message-modal first-message">{contactModal[language].error400.p1}</p>
            <p className="message-modal">{contactModal[language].error400.p2}</p>
            <p className="message-modal">{contactModal[language].error400.p3} <a href="mailto:support@developoulpe.fr">support@developoulpe.fr</a></p>
          </>
        )}
        {errorStatus === 502 && (
          <>
            <p className="message-modal first-message">{contactModal[language].error502.p1}</p>
            <p className="message-modal">{contactModal[language].error502.p2} <a href="mailto:support@developoulpe.fr">support@developoulpe.fr</a></p>
          </>
        )}
        {errorStatus === 418 && (
          <>
            <p className="message-modal first-message">{contactModal[language].error418.p1}</p>
            <p className="message-modal">{contactModal[language].error418.p2}</p>
          </>
        )}
        <button type="button" className="button-modal" onClick={closeContactModal}>{contactModal[language].button}</button>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Display or not the message sent information modal */
  display: PropTypes.bool.isRequired,

  /** Close the modal box */
  closeContactModal: PropTypes.func.isRequired,

  /** Error number status to display to select the good message to display */
  errorStatus: PropTypes.number.isRequired,
};

ContactModal.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default ContactModal;
