export const UPDATE_INPUT_BDD_VALUE = 'UPDATE_INPUT_BDD_VALUE';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const SAVE_ALL_ALBUMS = 'SAVE_ALL_ALBUMS';
export const OPEN_ADD_MENU = 'OPEN_ADD_MENU';
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const SAVE_ALL_PICTURES = 'SAVE_ALL_PICTURES';

export const updateInputBDDValue = (field, value) => ({
  type: UPDATE_INPUT_BDD_VALUE,
  field,
  value,
});

export const loadAlbums = () => ({
  type: LOAD_ALBUMS,
});

export const saveAllAlbums = (albums) => ({
  type: SAVE_ALL_ALBUMS,
  albums,
});

export const openAddMenu = () => ({
  type: OPEN_ADD_MENU,
});

export const loadPictures = (albumId) => ({
  type: LOAD_PICTURES,
  albumId,
});

export const saveAllPictures = (pictures, albumToDisplay) => ({
  type: SAVE_ALL_PICTURES,
  pictures,
  albumToDisplay,
});
