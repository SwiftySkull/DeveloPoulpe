// ACTIONS TYPES

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const OPEN_FORMA = 'OPEN_FORMA';
export const CLOSE_FORMA = 'CLOSE_FORMA';

// ACTIONS CREATORS

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

export const openForma = (formaId) => ({
  type: OPEN_FORMA,
  formaId,
});

export const closeForma = (formaId) => ({
  type: CLOSE_FORMA,
  formaId,
});
