import {
  DISPLAY_WEBSITE_INFOS,
} from 'src/actions/projectsActions';

const initialState = {
  displayedWebsite: 0,
};

/**
 * Reducer for the projects events.
 */
function projectsReducer(state = initialState, action) {
  switch (action.type) {
    /** Display specifics informations of one website with ID */
    case DISPLAY_WEBSITE_INFOS:
      return {
        ...state,
        displayedWebsite: action.websiteId,
      };

    default:
      return state;
  }
}

export default projectsReducer;
