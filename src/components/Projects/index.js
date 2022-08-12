// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import projects from 'src/data/Languages-files/projects';

import './projects.scss';

import { createMarkup } from 'src/utils';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {function} displayWebsiteInfos Display an information page about the website
 * @param {number} displayedWebsite Id number of the displayed website, none if 0
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Projects = ({
  language,
  displayWebsiteInfos,
  displayedWebsite,
  hideTopButton,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
  }, []);

  const displayWebsiteByKey = (evt) => {
    if (evt.key === 'Enter') {
      displayWebsiteInfos(Number(evt.target.id));
    }
  };

  return (
    <div id="projects">
      <h2>{projects[language].title}</h2>
      <p className="subtitle">{projects[language].subtitle}</p>
      <div className="project-cards">
        {projects[language].allProjects?.map((pro) => (
          <div className="card" tabIndex="0" onClick={() => displayWebsiteInfos(pro.id)} onKeyPress={displayWebsiteByKey} id={pro.id} key={pro.id}>
            <img src={pro.img} alt={`${pro.title} Website`} />
            <h3>{pro.title}</h3>
          </div>
        ))}
      </div>
      {displayedWebsite !== 0 && (
        <div className="modal-website">
          <button type="button" className="close-modal" onClick={() => displayWebsiteInfos(0)} id="0" onKeyPress={displayWebsiteByKey}>
            <p className="cross">+</p>
            <p className="text">Close</p>
          </button>
          <div className="modal-content">
            <h3>{projects[language].allProjects[displayedWebsite - 1].title}</h3>
            <div className="redirect"><a href={projects[language].allProjects[displayedWebsite - 1].link} target="_blank" rel="noreferrer noopener"><button type="button">{projects[language].visit}</button></a></div>
            <p>{projects[language].redirect}</p>
            <div className="image"><img src={projects[language].allProjects[displayedWebsite - 1].img} alt={`${projects[language].allProjects[displayedWebsite - 1].title} Website`} /></div>
            <div className="modal-text" dangerouslySetInnerHTML={createMarkup(projects[language].allProjects[displayedWebsite - 1].content)} />
          </div>
        </div>
      )}
    </div>
  );
};

Projects.propTypes = {
  /** Language of the website */
  language: PropTypes.string,

  /** Display an information page about the website */
  displayWebsiteInfos: PropTypes.func.isRequired,

  /** Id nnumber of the displayed website */
  displayedWebsite: PropTypes.number.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Projects.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default Projects;
