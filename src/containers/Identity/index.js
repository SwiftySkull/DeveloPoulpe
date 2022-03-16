import { connect } from 'react-redux';

import {
  openForma,
  closeForma,
} from 'src/actions/formationActions';

import Identity from 'src/components/Identity';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  chosenForma: Number(state.formation.chosenForma),
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Open a formation informations with it's ID */
  openForma: (evt) => {
    dispatch(openForma(evt.target.value));
  },

  /** Close a formation informations */
  closeForma: (evt) => {
    dispatch(closeForma(evt.target.value));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Identity);
