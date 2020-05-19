import React from 'react';
import { Link } from 'react-router-dom';

function NoteDisplay(props) {

  const dateModified = new Date(props.modified) 
  const year = dateModified.getFullYear();
  const month = dateModified.getMonth() + 1;
  const date = dateModified.getDate();

  return (
    <div className="notes">
      <Link to={`/note/${props.id}`} className="note-title">{props.name}</Link>
      <p className="note-modified">Modified on {month}/{date}/{year}</p>
      <button type="button" className="delete-note">Delete</button>
    </div>
  )
}

export default NoteDisplay;