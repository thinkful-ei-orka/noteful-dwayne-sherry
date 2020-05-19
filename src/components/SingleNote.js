import React from 'react';

function SingleNote(props) {
  const dateModified = new Date(props.note[0].modified) 
  const year = dateModified.getFullYear();
  const month = dateModified.getMonth() + 1;
  const date = dateModified.getDate();

  return (
    <div className="notes-container">
      <div className="notes">
        <h2 className="note-title">{props.note[0].name}</h2>
        <p className="note-modified">Modified on {month}/{date}/{year}</p>
        <button type="button" className="delete-note">Delete</button>
      </div>
        <p className="note-content">{props.note[0].content}</p>
    </div>
  )
}

export default SingleNote;