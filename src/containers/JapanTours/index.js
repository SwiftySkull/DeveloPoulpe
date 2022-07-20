import { connect } from 'react-redux';

// import { hideTopButton } from 'src/actions/mainActions';
// import { closeForma, closeExpe, closeOtherExpe } from 'src/actions/identityActions';

import { bddTest, updateInputBDDValue } from 'src/actions/bddActions';

import JapanTours from 'src/components/JapanTours';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  nameInput: state.bdd.nameInput,
  descriptionInput: state.bdd.descriptionInput,
  pictureInput: state.bdd.pictureInput,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  // /** Close the informations of the presentation page */
  // closePresentation: () => {
  //   dispatch(closeForma());
  //   dispatch(closeExpe());
  //   dispatch(closeOtherExpe());
  // },

  // /** Hide the Back-to-top button */
  // hideTopButton: () => {
  //   dispatch(hideTopButton());
  // },
  bddTest: (evt) => {
    dispatch(bddTest(evt));
  },

  updateInputBDDValue: (field, value) => {
    dispatch(updateInputBDDValue(field, value));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(JapanTours);
