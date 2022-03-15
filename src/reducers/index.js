import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import contactReducer from './contactReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  contact: contactReducer,
});

export default rootReducer;
