import React from 'react';
import FolderSidebar from './FolderSidebar';
import NoteList from './NoteList';
import PropTypes from 'prop-types';

function FolderPath(props) {
  return (
    <div className="main-div">
      <FolderSidebar folders={props.folders} folderId={props.folderId} />
      <NoteList notes={props.notes} />
    </div>
  )
}

FolderPath.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  modified: PropTypes.string,
  folderId: PropTypes.string,
}

export default FolderPath;