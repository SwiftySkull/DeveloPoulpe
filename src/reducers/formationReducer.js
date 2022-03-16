import {
  OPEN_FORMA,
  CLOSE_FORMA,
} from 'src/actions/formationActions';

const initialState = {
  chosenForma: 0,
};

/**
 * Reducer for the main events.
 */
function formationReducer(state = initialState, action) {
  switch (action.type) {
    /** Open a formation informations with it's ID */
    case OPEN_FORMA:
      return {
        ...state,
        chosenForma: action.formaId,
      };

    /** Close a formation informations */
    case CLOSE_FORMA:
      return {
        ...state,
        chosenForma: 0,
      };

    default:
      return state;
  }
}

export default formationReducer;
