import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import contactReducer from './contactReducer';
import formationReducer from './formationReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  contact: contactReducer,
  formation: formationReducer,
});

export default rootReducer;
