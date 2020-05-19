import React from 'react';
import FolderSidebar from './FolderSidebar';
import NoteList from './NoteList';

function MainPath(props) {
  return (
    <div className="main-div">
      <FolderSidebar folders={props.folders} />
      <NoteList notes={props.notes} />
    </div>
  )
}

export default MainPath;