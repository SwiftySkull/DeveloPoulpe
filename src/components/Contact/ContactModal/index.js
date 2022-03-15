// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import './contactModal.scss';
import contact from 'src/data/Languages-files/contact';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} display Display or not the message sent information modal
 */
const Contact = ({
  language,
  display,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="contactModal">
      
    </div>
  );
};

Contact.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Display or not the message sent information modal */
  display: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Contact;
