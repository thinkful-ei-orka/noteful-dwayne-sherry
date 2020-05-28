import React from 'react';
import FolderSidebar from './FolderSidebar';
import NoteList from './NoteList';
import PropTypes from 'prop-types';

function MainPath(props) {
  return (
    <div className="main-div">
      <FolderSidebar folders={props.folders} />
      <NoteList notes={props.notes} />
    </div>
  )
}

MainPath.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  modified: PropTypes.string,
  folderId: PropTypes.string,
}

export default MainPath;