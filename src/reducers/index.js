import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import contactReducer from './contactReducer';
import identityReducer from './identityReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  contact: contactReducer,
  identity: identityReducer,
});

export default rootReducer;
