// // == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './algues.scss';

import algue1 from 'src/assets/images/algue1.png';
import algue2 from 'src/assets/images/algue2.png';
import algue3 from 'src/assets/images/algue3.png';
import algue4 from 'src/assets/images/algue4.png';
import algue5 from 'src/assets/images/algue5.png';
import algue6 from 'src/assets/images/algue6.png';
import algue7 from 'src/assets/images/algue7.png';
import algue8 from 'src/assets/images/algue8.png';

// == Composant
const Algues = ({

}) => {
  useEffect(() => {

  }, []);

  const timer = [];
  const decal = [];
  const totalRound = 100;
  const allAlgues = [
    algue1,
    algue2,
    algue3,
    algue4,
    algue5,
    algue6,
    algue7,
    algue8,
  ];
  const alguesMoves = [
    'flow1',
    'flow2',
    'flow3',
    'flow4',
    'flow5',
  ];

  function getRandomInt() {
    return Math.floor((Math.random() * (10 - 6)) + 6);
  }

  for (let index = 0; index < totalRound; index++) {
    decal.push(30 * index);
  }

  function randomAlgue() {
    const algue = Math.floor(Math.random() * 8);
    return allAlgues[algue];
  }

  function randomFlow() {
    const flow = Math.floor(Math.random() * 5);
    return alguesMoves[flow];
  }

  return (
    <div id="algues">
      {decal.map((alg, index) => (
        <img key={alg} className="algue" style={{ left: `${alg}px`, animation: `${randomFlow()} ${getRandomInt()}s linear infinite` }} src={randomAlgue()} alt="" />
      ))}
    </div>
  );
};

Algues.propTypes = {

};

Algues.defaultProps = {

};

// == Export
export default Algues;
