/* eslint-disable no-console */
import axios from 'axios';
// import URI from 'urijs';

import {
  LOAD_ALBUMS,
  saveAllAlbums,
  LOAD_PICTURES,
  saveAllPictures,
} from 'src/actions/picturesActions';

// URL for the Axios requests
import { URL } from './mainMiddleware';

/**
 * MiddleWare for the main and authentification area.
 */
const picturesMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOAD_ALBUMS:
      axios.get(`${URL}/ouvrir-tous-les-albums`)
        .then((response) => {
          // console.log(response);
          store.dispatch(saveAllAlbums(response.data.albums));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    case LOAD_PICTURES:
      axios.get(`${URL}/ouvrir-album/${action.albumId}`)
        .then((response) => {
          // console.log(response);
          store.dispatch(saveAllPictures(response.data.pictures, response.data.album[0]));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default picturesMiddleware;
