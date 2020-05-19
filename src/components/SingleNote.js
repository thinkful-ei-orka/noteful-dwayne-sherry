import React from 'react';

function SingleNote() {
  return (
    <div className="notes-container">
      <div className="notes">
        <h2 className="note-title">Note 1</h2>
        <p className="note-modified">Date modified</p>
        <button type="button" className="delete-note">Delete</button>
      </div>
      <p className="note-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat vel, nulla vero tenetur enim, autem ad voluptatum, asperiores quas repellat? Odit iste cumque non. Qui tempore sapiente facilis voluptatem?</p>
    </div>
  )
}

export default SingleNote;