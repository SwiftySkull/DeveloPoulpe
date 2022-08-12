import { connect } from 'react-redux';

import { hideTopButton } from 'src/actions/mainActions';

import { addAlbum, updateInputBDDValue, editAlbum } from 'src/actions/bddActions';

import { loadAlbums } from 'src/actions/picturesActions';

import AddAlbum from 'src/components/Pictures/AddAlbum';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
  nameInput: state.bdd.nameInput,
  descriptionInput: state.bdd.descriptionInput,
  pictureInput: state.bdd.pictureInput,
  albums: state.bdd.albums,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },

  addAlbum: () => {
    dispatch(addAlbum());
  },

  updateInputBDDValue: (field, value) => {
    dispatch(updateInputBDDValue(field, value));
  },

  loadAlbums: () => {
    dispatch(loadAlbums());
  },

  editAlbum: (albumToUpdate) => {
    dispatch(editAlbum(albumToUpdate));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);
