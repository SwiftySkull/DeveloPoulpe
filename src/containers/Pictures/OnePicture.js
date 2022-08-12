import { connect } from 'react-redux';

import {
  loadAlbums,
  openAddMenu,
} from 'src/actions/picturesActions';

import { hideTopButton } from 'src/actions/mainActions';

import OnePicture from 'src/components/Pictures/OnePicture';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  albums: state.pictures.albums,
  addAlbum: state.pictures.addAlbum,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },

  loadAlbums: () => {
    dispatch(loadAlbums());
  },

  openAddMenu: () => {
    dispatch(openAddMenu());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(OnePicture);
