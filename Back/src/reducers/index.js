import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import contactReducer from './contactReducer';
import identityReducer from './identityReducer';
import projectsReducer from './projectsReducer';
import picturesReducer from './picturesReducer';
import bddReducer from './bddReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  contact: contactReducer,
  identity: identityReducer,
  projects: projectsReducer,
  pictures: picturesReducer,
  bdd: bddReducer,
});

export default rootReducer;
