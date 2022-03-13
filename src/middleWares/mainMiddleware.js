/* eslint-disable no-console */
import axios from 'axios';

import {

} from 'src/actions/mainActions';

// URL for the Axios requests
export const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
