import { connect } from 'react-redux';

import { displayWebsiteInfos } from 'src/actions/projectsActions';
import { hideTopButton } from 'src/actions/mainActions';

import Projects from 'src/components/Projects';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  displayedWebsite: state.projects.displayedWebsite,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Display the informations of the selected website or hide */
  displayWebsiteInfos: (websiteId) => {
    dispatch(displayWebsiteInfos(websiteId));
  },

  /** Hide the Back-to-top button */
  hideTopButton: () => {
    dispatch(hideTopButton());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
