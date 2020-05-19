import React from 'react';
import FolderList from './FolderList'

function FolderSidebar(props) {
  return (
    <aside>
      {props.folders.map(folder => <FolderList 
        id={folder.id}
        key={folder.id}
        name={folder.name}
      />)}
      <button type="button" className="add-folder">Add Folder</button>
    </aside>
  )
}

export default FolderSidebar;