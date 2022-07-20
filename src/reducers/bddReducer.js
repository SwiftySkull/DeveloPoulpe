import {
  UPDATE_INPUT_BDD_VALUE,
} from 'src/actions/bddActions';

const initialState = {
  nameInput: '',
  descriptionInput: '',
  pictureInput: '',
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

    default:
      return state;
  }
}

export default bddReducer;
