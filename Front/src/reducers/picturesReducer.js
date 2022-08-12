import {
  SAVE_ALL_ALBUMS,
  OPEN_ADD_MENU,
  SAVE_ALL_PICTURES,
} from 'src/actions/picturesActions';

const initialState = {
  allAlbums: [],
  addAlbum: false,
  allPictures: [],
  albumToDisplay: {},
};

/**
 * Reducer for the bdd events.
 */
function picturesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_PICTURES:
      return {
        ...state,
        allPictures: action.pictures,
        albumToDisplay: action.albumToDisplay,
      };

    case SAVE_ALL_ALBUMS:
      return {
        ...state,
        allAlbums: action.albums,
      };

    case OPEN_ADD_MENU:
      return {
        ...state,
        addAlbum: !state.addAlbum,
      };

    default:
      return state;
  }
}

export default picturesReducer;
