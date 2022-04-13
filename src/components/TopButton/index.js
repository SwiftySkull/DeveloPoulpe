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
 */
const TopButton = ({
  backToTopButton,
  hideTopButton,
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
    <div tabIndex="0" id="topButton" onClick={scrollToTop} style={{ opacity: backToTopButton ? 1 : 0 }} onKeyPress={topByKey}>
      <FontAwesomeIcon focusable="true" icon={faArrowUp} style={{ opacity: backToTopButton ? 1 : 0 }} className="arrow" />
    </div>
  );
};

TopButton.propTypes = {
  /** Show or not the Bak-to-top button */
  backToTopButton: PropTypes.bool.isRequired,

  /** Hide the Bak-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

TopButton.defaultProps = {
};

// == Export
export default TopButton;
