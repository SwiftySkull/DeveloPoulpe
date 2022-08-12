// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

// == Import
// import legal from 'src/data/Languages-files/legal';

import './addAlbum.scss';

// import japanVideo from 'public\assets\videos\Impressions Invites JTF web.mp4';

// import {
//   albumsUrl,
//   dbbUrl,
// } from 'src/data/urls';

// == Composant
/**
 * Contact page component
 *
 * @param {string} language Language of the website
 * @param {boolean} cookieStatus Boolean to determine if cookies are accepted or not
 * @param {func} hideTopButton Hide the Back-to-top button
 */
const AddAlbum = ({
  language,
  addAlbum,
  updateInputBDDValue,
  nameInput,
  descriptionInput,
  method,
  editAlbum,
  albumToUpdate,
}) => {
  useEffect(() => {

  }, []);

  function bddAction(evt) {
    evt.preventDefault();

    if (method === 'edit') {
      editAlbum(albumToUpdate);
    }
    else if (method === 'add') {
      addAlbum();
    }
  }

  return (
    <div id="addAlbum">
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(evt) => bddAction(evt)}>
        <h4>{method === 'add' ? 'Ajouter un nouvel album' : 'Modifier un album'}</h4>
        <label htmlFor="name-input">Nom de l'album</label>
        <input type="text" id="name-input" name="name-input" value={nameInput} onChange={(evt) => updateInputBDDValue('name-input', evt.target.value)} />
        <label htmlFor="description-input">Description de l'album</label>
        <textarea id="description-input" name="description-input" value={descriptionInput} onChange={(evt) => updateInputBDDValue('description-input', evt.target.value)} />
        <label htmlFor="picture-input">Photo de l'album</label>
        <input type="file" id="picture-input" name="picture-input" onChange={(evt) => updateInputBDDValue('picture-input', evt.target.files[0])} />
        <button type="submit" onSubmit={(evt) => bddAction(evt)}>Valider la saisie</button>
      </form>
    </div>
  );
};

AddAlbum.propTypes = {
  /** Language of the website */
  language: PropTypes.string,
};

AddAlbum.defaultProps = {
  /** Default language in French */
  language: 'fr',
};

// == Export
export default AddAlbum;
