// // == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import

import './underConstruction.scss';

// == Composant
const UnderConstruction = ({
  title,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="underConstruction">
      <div className="under-construction">{title} under construction</div>
      <div className="rideau" />
      <div className="construction">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

UnderConstruction.propTypes = {
  title: PropTypes.string,
};

UnderConstruction.defaultProps = {
  title: '',
};

// == Export
export default UnderConstruction;
