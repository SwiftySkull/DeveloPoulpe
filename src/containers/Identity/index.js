import { connect } from 'react-redux';

import {
  openForma,
  closeForma,
  openExpe,
  closeExpe,
} from 'src/actions/identityActions';

import Identity from 'src/components/Identity';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  chosenForma: Number(state.identity.chosenForma),
  chosenExpe: Number(state.identity.chosenExpe),
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
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Identity);
