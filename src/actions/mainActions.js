// ACTIONS TYPES

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ACCEPT_COOKIES = 'ACCEPT_COOKIES';
export const REFUSE_COOKIE = 'REFUSE_COOKIE';
export const UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE';
export const CHANGE_MENU = 'CHANGE_MENU';
export const HIDE_TOP_BUTTON = 'HIDE_TOP_BUTTON';
export const DISPLAY_TOP_BUTTON = 'DISPLAY_TOP_BUTTON';
export const SAVE_PICTURE = 'SAVE_PICTURE';

// ACTIONS CREATORS

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

export const acceptCookies = () => ({
  type: ACCEPT_COOKIES,
});

export const refuseCookies = () => ({
  type: REFUSE_COOKIE,
});

export const updateInputValue = (field, value) => ({
  type: UPDATE_FIELD_VALUE,
  field,
  value,
});

export const changeMenu = (menuStatus) => ({
  type: CHANGE_MENU,
  menuStatus,
});

export const hideTopButton = () => ({
  type: HIDE_TOP_BUTTON,
});

export const displayTopButton = () => ({
  type: DISPLAY_TOP_BUTTON,
});

export const savepicture = (picture) => ({
  type: SAVE_PICTURE,
  picture,
});
