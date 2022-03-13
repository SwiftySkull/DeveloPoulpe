import {
  CHANGE_LANGUAGE,
  ACCEPT_COOKIES,
  REFUSE_COOKIE,
} from 'src/actions/mainActions';

const initialState = {
  language: 'fr',
  cookieBox: false,
  cookieStatus: false,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Change the language of the website
     */
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    /**
     * User accepts the cookies and closes the box
     */
    case ACCEPT_COOKIES:
      return {
        ...state,
        cookieBox: true,
        cookieStatus: true,
      };

    /** User refuses the cookies and closes the box */
    case REFUSE_COOKIE:
      return {
        ...state,
        cookieBox: true,
        cookieStatus: false,
      };

    default:
      return state;
  }
}

export default mainReducer;
