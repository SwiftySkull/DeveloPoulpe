// ACTIONS TYPES

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const OPEN_FORMA = 'OPEN_FORMA';
export const CLOSE_FORMA = 'CLOSE_FORMA';
export const OPEN_EXPE = 'OPEN_EXPE';
export const CLOSE_EXPE = 'CLOSE_EXPE';
export const OPEN_OTHER_EXPE = 'OPEN_OTHER_EXPE';
export const CLOSE_OTHER_EXPE = 'CLOSE_OTHER_EXPE';

// ACTIONS CREATORS

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

export const openForma = (formaId) => ({
  type: OPEN_FORMA,
  formaId,
});

export const closeForma = () => ({
  type: CLOSE_FORMA,
});

export const openExpe = (expeId) => ({
  type: OPEN_EXPE,
  expeId,
});

export const closeExpe = () => ({
  type: CLOSE_EXPE,
});

export const openOtherExpe = (otherExpeId) => ({
  type: OPEN_OTHER_EXPE,
  otherExpeId,
});

export const closeOtherExpe = () => ({
  type: CLOSE_OTHER_EXPE,
});
