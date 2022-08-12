import {
  UPDATE_INPUT_BDD_VALUE,
  OPEN_ADD_MENU,
  ALBUM_CREATED,
} from 'src/actions/bddActions';

const initialState = {
  nameInput: '',
  descriptionInput: '',
  pictureInput: '',
  albums: [],
  addAlbumStatus: false,
};

/**
 * Reducer for the bdd events.
 */
function bddReducer(state = initialState, action) {
  switch (action.type) {
    /** Display specifics informations of one website with ID */
    case UPDATE_INPUT_BDD_VALUE:
      return {
        ...state,
        nameInput: action.field === 'name-input' ? action.value : state.nameInput,
        descriptionInput: action.field === 'description-input' ? action.value : state.descriptionInput,
        pictureInput: action.field === 'picture-input' ? action.value : state.pictureInput,
      };

    case OPEN_ADD_MENU:
      return {
        ...state,
        addAlbumStatus: !state.addAlbumStatus,
      };

    case ALBUM_CREATED:
      return {
        ...state,
        nameInput: '',
        descriptionInput: '',
        addAlbumStatus: false,
      };

    default:
      return state;
  }
}

export default bddReducer;
