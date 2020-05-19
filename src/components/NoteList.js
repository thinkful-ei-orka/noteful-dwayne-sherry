import React from 'react';
import NoteDisplay from './NoteDisplay';

function NoteList(props) {
  return (
    <div className="notes-container">
    {props.notes.map(note => <NoteDisplay 
      name={note.name}
      modified={note.modified}
      key={note.id}
      />)}
    <button type="button" className="add-note">Add Note</button>
  </div>
  )
}

export default NoteList;