import { connect } from 'react-redux';

import { displayWebsiteInfos } from 'src/actions/projectsActions';

import Projects from 'src/components/Projects';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  language: state.main.language,
  cookieStatus: state.main.cookieStatus,
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
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
