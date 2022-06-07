import {
  CHANGE_LANGUAGE,
  ACCEPT_COOKIES,
  REFUSE_COOKIE,
  CHANGE_MENU,
  DISPLAY_TOP_BUTTON,
  HIDE_TOP_BUTTON,
} from 'src/actions/mainActions';

const initialState = {
  language: 'fr',
  cookieBox: false,
  cookieStatus: false,
  menuStatus: false,
  backToTopButton: false,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    /** Display the back-to-top button */
    case DISPLAY_TOP_BUTTON:
      return {
        ...state,
        backToTopButton: true,
      };

    /** Hide the back-to-top button */
    case HIDE_TOP_BUTTON:
      return {
        ...state,
        backToTopButton: false,
      };

    /** Open/Close the menu */
    case CHANGE_MENU:
      return {
        ...state,
        menuStatus: action.menuStatus,
      };

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
