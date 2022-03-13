// ACTIONS TYPES

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ACCEPT_COOKIES = 'ACCEPT_COOKIES';
export const REFUSE_COOKIE = 'REFUSE_COOKIE';

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
