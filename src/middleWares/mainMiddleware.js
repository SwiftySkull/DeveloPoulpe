/* eslint-disable no-console */
import axios from 'axios';

import {

} from 'src/actions/mainActions';

import {
  SUBMIT_REQUEST,
  requestSent,
} from 'src/actions/contactActions';

// URL for the Axios requests
export const URL = 'http://localhost:8888/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_REQUEST: {
      const {
        fieldName,
        fieldEmail,
        fieldTel,
        fieldSubject,
        fieldMessage,
      } = state.contact;

      // Validator
      let sendRequest = false;
      if (
        fieldName !== ''
        && fieldSubject !== ''
        && fieldMessage !== ''
        && (
          fieldEmail !== ''
          || fieldTel !== ''
        )
      ) {
        sendRequest = true;
      }

      if (sendRequest) {
        // emailjs
        store.dispatch(requestSent());
        next(action);
        break;
      }
    }
      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
