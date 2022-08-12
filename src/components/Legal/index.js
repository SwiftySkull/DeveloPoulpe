// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import legal from 'src/data/Languages-files/legal';

import './legal.scss';

import { createMarkup } from 'src/utils';

// == Composant
/**
 * Contact page component
 *
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Legal = ({
  language,
  hideTopButton,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
  }, []);

  return (
    <div id="legal">
      <h2>{legal[language].title}</h2>
      <p>{legal[language].p1}</p>
      <div dangerouslySetInnerHTML={createMarkup(legal[language].edit)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].heb)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].cookies)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].links)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].datalimit)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].intell)} />
      <div dangerouslySetInnerHTML={createMarkup(legal[language].perso)} />
    </div>
  );
};

Legal.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Legal.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Legal;
