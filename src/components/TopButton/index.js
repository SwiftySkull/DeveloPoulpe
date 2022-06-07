// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// == Import
import './topButton.scss';

// == Composant
/**
 * Contact page component
 *
 * @param {boolean} backToTopButton Show or not the Bak-to-top button
 * @param {function} hideTopButton Hide the Bak-to-top button
 * @param {string} language Language of the website
 */
const TopButton = ({
  backToTopButton,
  hideTopButton,
  language,
}) => {
  useEffect(() => {

  }, []);

  const scrollToTop = () => {
    window.scroll(0, 0);
    hideTopButton();
  };

  const topByKey = (evt) => {
    if (evt.key === 'Enter') {
      scrollToTop();
    }
  };

  return (
    <div title={language === 'fr' ? 'Retour en haut de page' : 'Back to top of page'} tabIndex="0" id="topButton" onClick={scrollToTop} style={{ opacity: backToTopButton ? 1 : 0 }} onKeyPress={topByKey}>
      <div className="cube">
        <div className="top" />
        <div>
          <span className="span1"><FontAwesomeIcon focusable="true" icon={faArrowUp} style={{ opacity: backToTopButton ? 1 : 0 }} className="arrow" /></span>
          <span className="span2"><FontAwesomeIcon focusable="true" icon={faArrowUp} style={{ opacity: backToTopButton ? 1 : 0 }} className="arrow" /></span>
          <span className="span3"><FontAwesomeIcon focusable="true" icon={faArrowUp} style={{ opacity: backToTopButton ? 1 : 0 }} className="arrow" /></span>
          <span className="span4"><FontAwesomeIcon focusable="true" icon={faArrowUp} style={{ opacity: backToTopButton ? 1 : 0 }} className="arrow" /></span>
        </div>
        <div className="bottom" />
      </div>
    </div>
  );
};

TopButton.propTypes = {
  /** Show or not the Bak-to-top button */
  backToTopButton: PropTypes.bool.isRequired,

  /** Hide the Bak-to-top button */
  hideTopButton: PropTypes.func.isRequired,

  /** Language of the website */
  language: PropTypes.string,
};

TopButton.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default TopButton;
