import {
  OPEN_FORMA,
  CLOSE_FORMA,
  OPEN_EXPE,
  CLOSE_EXPE,
  OPEN_OTHER_EXPE,
  CLOSE_OTHER_EXPE,
} from 'src/actions/identityActions';

const initialState = {
  chosenForma: 0,
  chosenExpe: 0,
  chosenOtherExpe: 0,
};

/**
 * Reducer for the main events.
 */
function identityReducer(state = initialState, action) {
  switch (action.type) {
    /** Open an experience's informations with it's ID */
    case OPEN_OTHER_EXPE:
      return {
        ...state,
        chosenOtherExpe: action.otherExpeId,
      };

    /** Close an experience's informations */
    case CLOSE_OTHER_EXPE:
      return {
        ...state,
        chosenOtherExpe: 0,
      };

    /** Open an experience's informations with it's ID */
    case OPEN_EXPE:
      return {
        ...state,
        chosenExpe: action.expeId,
      };

    /** Close an experience's informations */
    case CLOSE_EXPE:
      return {
        ...state,
        chosenExpe: 0,
      };

    /** Open a formation's informations with it's ID */
    case OPEN_FORMA:
      return {
        ...state,
        chosenForma: action.formaId,
      };

    /** Close a formation's informations */
    case CLOSE_FORMA:
      return {
        ...state,
        chosenForma: 0,
      };

    default:
      return state;
  }
}

export default identityReducer;
