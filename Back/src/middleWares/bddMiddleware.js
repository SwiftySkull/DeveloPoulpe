/* eslint-disable no-console */
import axios from 'axios';
// import URI from 'urijs';

import {
  ADD_ALBUM,
  albumCreated,
  EDIT_ALBUM,
  updatePicture,
  UPDATE_PICTURE,
} from 'src/actions/bddActions';

import {
  loadAlbums,
} from 'src/actions/picturesActions';

// URL for the Axios requests
import { URL } from './mainMiddleware';

/**
 * MiddleWare for the main and authentification area.
 */
const picturesMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case ADD_ALBUM: {
      const formData = new FormData();
      formData.append('name', state.bdd.nameInput);
      formData.append('description', state.bdd.descriptionInput);
      formData.append('picture', state.bdd.pictureInput);

      axios({
        method: 'post',
        url: `${URL}/nouvel-album`,
        data: formData,
        headers: { 'Content-type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(albumCreated());
          store.dispatch(loadAlbums());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case EDIT_ALBUM:
      axios.patch(
        `${URL}/edition-album/${action.albumToUpdate}`,
        {
          name: state.bdd.nameInput,
          description: state.bdd.descriptionInput,
        },
        { headers: { 'Content-Type': 'application/json' } },
      )
        .then((response) => {
          if (state.bdd.pictureInput === '') {
            location.reload();
          }
          else {
            store.dispatch(updatePicture(action.albumToUpdate));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case UPDATE_PICTURE: {
      const formData = new FormData();
      formData.append('picture', state.bdd.pictureInput);
      axios({
        method: 'post',
        url: `${URL}/edition-album-photo/${action.albumToUpdate}`,
        data: formData,
        headers: { 'Content-type': 'multipart/form-data' },
      })
        .then((response) => {
          location.reload();
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

export default picturesMiddleware;
