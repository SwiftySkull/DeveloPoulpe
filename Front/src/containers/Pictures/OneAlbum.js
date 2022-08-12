import { connect } from 'react-redux';

import {
  loadPictures,
} from 'src/actions/picturesActions';

import { hideTopButton } from 'src/actions/mainActions';

import OneAlbum from 'src/components/Pictures/OneAlbum';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  allPictures: state.pictures.allPictures,
  albumToDisplay: state.pictures.albumToDisplay,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },

  loadPictures: (albumId) => {
    dispatch(loadPictures(albumId));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(OneAlbum);
