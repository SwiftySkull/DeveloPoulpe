/* eslint-disable no-console */
// import axios from 'axios';
import emailjs, { init } from '@emailjs/browser';
// import URI from 'urijs';

import {
  BDD_TEST,
} from 'src/actions/bddActions';

import {
  requestSent,
  contactError,
  SEND_REQUEST,
} from 'src/actions/contactActions';

import {
  contactValidator,
  checkMailOrPhone,
} from 'src/utils';
import axios from 'axios';

// URL for the Axios requests
export const URL = 'http://localhost:8888/';
init('f15s27RrZoXbjheHP');

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SEND_REQUEST: {
      const {
        fieldName,
        fieldEmail,
        fieldTel,
        fieldSubject,
        fieldMessage,
      } = state.contact;

      // Validator
      const checkMoP = checkMailOrPhone(fieldEmail, fieldTel);

      if (!checkMoP) {
        console.log(418);
        store.dispatch(contactError(418));
        next(action);
        break;
      }

      const sendRequest = contactValidator(
        fieldName,
        fieldEmail,
        fieldTel,
        fieldSubject,
        fieldMessage,
      );

      if (sendRequest) {
        emailjs.sendForm('service_6ocqlb5', 'template_0c3zm1h', action.form, 'f15s27RrZoXbjheHP')
          .then(() => {
            store.dispatch(requestSent());
          })
          .catch((error) => {
            store.dispatch(contactError(400));
          });
        next(action);
        break;
      }
      store.dispatch(contactError(502));
    }
      next(action);
      break;

    case BDD_TEST: {
      // console.log(action.evt.target.input('name-input').value);

      // action.evt.target.value();
      // console.log(state.bdd.nameInput);
      // const name = state.bdd.nameInput;

      const formData = new FormData();

      formData.append('picture', {
        name: new URI(state.bdd.pictureInput).filename(),
        type: 'image/jpeg',
      });

      axios.post(`${URL}nouvel-album`, { name: state.bdd.nameInput, description: state.bdd.descriptionInput, formData }, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
