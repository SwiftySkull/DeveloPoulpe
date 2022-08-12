export const ADD_ALBUM = 'ADD_ALBUM';
export const UPDATE_INPUT_BDD_VALUE = 'UPDATE_INPUT_BDD_VALUE';
export const OPEN_ADD_MENU = 'OPEN_ADD_MENU';
export const ALBUM_CREATED = 'ALBUM_CREATED';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';

export const addAlbum = () => ({
  type: ADD_ALBUM,
});

export const openAddMenu = () => ({
  type: OPEN_ADD_MENU,
});

export const albumCreated = () => ({
  type: ALBUM_CREATED,
});

export const updateInputBDDValue = (field, value) => ({
  type: UPDATE_INPUT_BDD_VALUE,
  field,
  value,
});

export const editAlbum = (albumToUpdate) => ({
  type: EDIT_ALBUM,
  albumToUpdate,
});

export const updatePicture = (albumToUpdate) => ({
  type: UPDATE_PICTURE,
  albumToUpdate,
});
