import React from 'react';
import FolderList from './FolderList';
import PropTypes from 'prop-types';

function FolderSidebar(props) {
  return (
    <aside>
      {props.folders.map(folder => <FolderList 
        id={folder.id}
        key={folder.id}
        name={folder.name}
        highlighted={props.folderId ? props.folderId === folder.id : false}
      />)}
      <button type="button" className="add-folder">Add Folder</button>
    </aside>
  )
}

FolderSidebar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}

export default FolderSidebar;