import React from  'react';
import SingleFolderSidebar from './SingleFolderSidebar';
import SingleNote from './SingleNote';
import PropTypes from 'prop-types';

function NotePath(props) {
  return (
    <div>
      <SingleFolderSidebar folderId={props.folder.id} folderName={props.folder.name}/>
      <SingleNote note={props.note}/>
    </div>

  )
}

NotePath.propTypes = {
  noteId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  modified: PropTypes.string,
  folderId: PropTypes.string,
}

export default NotePath;