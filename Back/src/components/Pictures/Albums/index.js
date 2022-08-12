// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './albums.scss';

import AddAlbum from 'src/containers/Pictures/AddAlbum';

import { stringToUrl } from 'src/utils';

import {
  dbbUrl,
  oneAlbumUrl,
} from 'src/data/urls';

// import japanVideo from 'public\assets\videos\Impressions Invites JTF web.mp4';

// == Composant
/**
 * List of the albums
 *
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const Albums = ({
  allAlbums,
  loadAlbums,
  openAddMenu,
  hideTopButton,
  addAlbumStatus,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    hideTopButton();
    loadAlbums();
  }, []);

  return (
    <div id="albums">
      <h2>Albums</h2>
      <button type="button" onClick={() => openAddMenu()}>{addAlbumStatus ? 'Fermer fenêtre' : 'Ajouter un album'}</button>
      {addAlbumStatus && <AddAlbum method="add" />}
      {/* <div className="youtube-embed">
        <iframe src="https://www.youtube.com/embed/bn4F6U3jyJs" title="Japan Tours Festival 2022 Vidéo" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p><a href="https://www.youtube.com/embed/bn4F6U3jyJs" target="_blank" rel="noreferrer noopener">Japan Tours Festival 2022 Impressions des Invités</a></p>
      </div> */}
      <div className="album-list">
        {allAlbums.map((alb) => (
          <Link className="one-album" to={`${oneAlbumUrl}/${alb.id}/${stringToUrl(alb.name)}`} key={alb.id}>
            <h3>{alb.name}</h3>
            <img src={dbbUrl + alb.picture} alt={alb.name} />
            <div className="bubble-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};

Albums.propTypes = {
  openAddMenu: PropTypes.func.isRequired,

  /** Hide the Back-to-top button */
  hideTopButton: PropTypes.func.isRequired,
};

Albums.defaultProps = {

};

// == Export
export default Albums;
