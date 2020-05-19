import React from 'react';

function NoteList() {
  return (
    <div className="notes-container">
    <div className="notes">
      <h2 className="note-title">Note 1</h2>
      <p className="note-modified">Date modified</p>
      <button type="button" className="delete-note">Delete</button>
    </div>
    <button type="button" className="add-note">Add Note</button>
  </div>
  )
}

export default NoteList;