// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import
import './oneAlbum.scss';

import {
  dbbUrl,
} from 'src/data/urls';

// == Composant
/**
 * List of the pictures of one album
 *
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const OneAlbum = ({
  allPictures,
  hideTopButton,
  loadPictures,
  albumToDisplay,
}) => {
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
    loadPictures(id);
  }, []);

  return (
    <div id="oneAlbum">
      <h2>{albumToDisplay?.name}</h2>
      <img className="album-image" src={dbbUrl + albumToDisplay?.picture} alt={albumToDisplay?.name} />
      <p className="album-description">{albumToDisplay?.description}</p>
      <div className="pictures-list">
        {allPictures.map((pic) => (
          <div className="one-picture" key={pic.id}>
            <img src={dbbUrl + pic.link} alt={pic.name} />
            <div className="bubble-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

OneAlbum.propTypes = {
  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,

  /** One album's informations */
  albumToDisplay: PropTypes.object.isRequired,

  /** Array of all the pictures */
  allPictures: PropTypes.array.isRequired,
  /** Function to load the pictures */
  loadPictures: PropTypes.func.isRequired,
};

OneAlbum.defaultProps = {

};

// == Export
export default OneAlbum;
