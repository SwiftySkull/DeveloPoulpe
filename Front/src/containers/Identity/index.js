import { connect } from 'react-redux';

import {
  openForma,
  closeForma,
  openExpe,
  closeExpe,
  openOtherExpe,
  closeOtherExpe,
} from 'src/actions/identityActions';

import { hideTopButton } from 'src/actions/mainActions';

import Identity from 'src/components/Identity';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  chosenForma: Number(state.identity.chosenForma),
  chosenExpe: Number(state.identity.chosenExpe),
  chosenOtherExpe: Number(state.identity.chosenOtherExpe),
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Open a formation's informations with it's ID */
  openForma: (evt) => {
    dispatch(openForma(evt.target.value));
  },

  /** Close a formation's informations */
  closeForma: () => {
    dispatch(closeForma());
  },

  /** Open an experience's informations with it's ID */
  openExpe: (evt) => {
    dispatch(openExpe(evt.target.value));
  },

  /** Close an experience's informations */
  closeExpe: () => {
    dispatch(closeExpe());
  },

  /** Open an other experience's informations with it's ID */
  openOtherExpe: (evt) => {
    dispatch(openOtherExpe(evt.target.value));
  },

  /** Close an other experience's informations */
  closeOtherExpe: () => {
    dispatch(closeOtherExpe());
  },

  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Identity);
