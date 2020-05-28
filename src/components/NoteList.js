import React from 'react';
import NoteDisplay from './NoteDisplay';
import PropTypes from 'prop-types';

function NoteList(props) {
  return (
    <div className="notes-container">
    {props.notes.map(note => <NoteDisplay 
      name={note.name}
      modified={note.modified}
      key={note.id}
      id={note.id}
      />)}
    <button type="button" className="add-note">Add Note</button>
  </div>
  )
}

NoteList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  modified: PropTypes.string,
  folderId: PropTypes.string,
}

export default NoteList;