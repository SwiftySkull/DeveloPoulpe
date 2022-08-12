import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from 'src/middleWares/mainMiddleware';
import picturesMiddleware from 'src/middleWares/picturesMiddleware';
import bddMiddleware from 'src/middleWares/bddMiddleware';

import reducer from 'src/reducers';

/**
 * Combine all the MiddleWares.
 */
const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    picturesMiddleware,
    bddMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
