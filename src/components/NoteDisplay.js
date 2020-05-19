import React from 'react';

function NoteDisplay(props) {

  const dateModified = new Date(props.modified) 
  const year = dateModified.getFullYear();
  const month = dateModified.getMonth() + 1;
  const date = dateModified.getDate();

  return (
    <div className="notes">
      <h2 className="note-title">{props.name}</h2>
      <p className="note-modified">Modified on {month}/{date}/{year}</p>
      <button type="button" className="delete-note">Delete</button>
    </div>
  )
}

export default NoteDisplay;