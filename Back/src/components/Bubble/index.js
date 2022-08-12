// // == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

// == Import
import './bubble.scss';

import bubble from 'src/assets/images/bulle.png';

// == Composant
/**
 * Component which manages the bubble behaviour
 */
const Bubble = () => {
  useEffect(() => {

  }, []);

  const timer = [];
  const decal = [];
  const totalRound = 45;

  function getRandomInt(max) {
    return Math.random() * max;
  }

  for (let index = 0; index < totalRound; index++) {
    timer.push(getRandomInt(25));
  }

  for (let index = 0; index < totalRound; index++) {
    decal.push(-15 + (45 * index));
  }

  return (
    <div id="bubble">
      <img className="bubble bubbleUp10" style={{ left: `${decal[0]}px`, animation: `bubbleMove 10s ${timer[0]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[1]}px`, animation: `bubbleMove 5s ${timer[1]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[2]}px`, animation: `bubbleMove 15s ${timer[2]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[3]}px`, animation: `bubbleMove 10s ${timer[3]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[4]}px`, animation: `bubbleMove 5s ${timer[4]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[5]}px`, animation: `bubbleMove 15s ${timer[5]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[6]}px`, animation: `bubbleMove 10s ${timer[6]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[7]}px`, animation: `bubbleMove 5s ${timer[7]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[8]}px`, animation: `bubbleMove 15s ${timer[8]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[9]}px`, animation: `bubbleMove 10s ${timer[9]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[10]}px`, animation: `bubbleMove 5s ${timer[10]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[11]}px`, animation: `bubbleMove 15s ${timer[11]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[12]}px`, animation: `bubbleMove 10s ${timer[12]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[13]}px`, animation: `bubbleMove 5s ${timer[13]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[14]}px`, animation: `bubbleMove 15s ${timer[14]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[15]}px`, animation: `bubbleMove 10s ${timer[15]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[16]}px`, animation: `bubbleMove 5s ${timer[16]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[17]}px`, animation: `bubbleMove 15s ${timer[17]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[18]}px`, animation: `bubbleMove 10s ${timer[18]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[19]}px`, animation: `bubbleMove 5s ${timer[19]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[20]}px`, animation: `bubbleMove 15s ${timer[20]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[21]}px`, animation: `bubbleMove 10s ${timer[21]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[22]}px`, animation: `bubbleMove 5s ${timer[22]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[23]}px`, animation: `bubbleMove 15s ${timer[23]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[24]}px`, animation: `bubbleMove 10s ${timer[24]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[25]}px`, animation: `bubbleMove 5s ${timer[25]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[26]}px`, animation: `bubbleMove 15s ${timer[26]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[27]}px`, animation: `bubbleMove 10s ${timer[27]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[28]}px`, animation: `bubbleMove 5s ${timer[28]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[29]}px`, animation: `bubbleMove 15s ${timer[29]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[30]}px`, animation: `bubbleMove 10s ${timer[30]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[31]}px`, animation: `bubbleMove 5s ${timer[31]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[32]}px`, animation: `bubbleMove 15s ${timer[32]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[33]}px`, animation: `bubbleMove 10s ${timer[33]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[34]}px`, animation: `bubbleMove 5s ${timer[34]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[35]}px`, animation: `bubbleMove 15s ${timer[35]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[36]}px`, animation: `bubbleMove 10s ${timer[36]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[37]}px`, animation: `bubbleMove 5s ${timer[37]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[38]}px`, animation: `bubbleMove 15s ${timer[38]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[39]}px`, animation: `bubbleMove 10s ${timer[39]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[40]}px`, animation: `bubbleMove 5s ${timer[40]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[41]}px`, animation: `bubbleMove 15s ${timer[41]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp10" style={{ left: `${decal[42]}px`, animation: `bubbleMove 10s ${timer[42]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp5" style={{ left: `${decal[43]}px`, animation: `bubbleMove 5s ${timer[43]}s linear infinite` }} src={bubble} alt="" />
      <img className="bubble bubbleUp15" style={{ left: `${decal[44]}px`, animation: `bubbleMove 15s ${timer[44]}s linear infinite` }} src={bubble} alt="" />
    </div>
  );
};

// Bubble.propTypes = {

// };

// Bubble.defaultProps = {

// };

// == Export
export default Bubble;
