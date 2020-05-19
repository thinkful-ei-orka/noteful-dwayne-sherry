import React from 'react';
import FolderSidebar from './FolderSidebar';
import NoteList from './NoteList';

function FolderPath(props) {
  return (
    <div className="main-div">
      <FolderSidebar folders={props.folders} folderId={props.folderId} />
      <NoteList notes={props.notes} />
    </div>
  )
}

export default FolderPath;