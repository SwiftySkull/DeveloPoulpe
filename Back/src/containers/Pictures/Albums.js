import { connect } from 'react-redux';

import {
  loadAlbums,
  openAddMenu,
} from 'src/actions/picturesActions';

import { hideTopButton } from 'src/actions/mainActions';

import Albums from 'src/components/Pictures/Albums';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  allAlbums: state.pictures.allAlbums,
  addAlbumStatus: state.bdd.addAlbumStatus,
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
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
