import React from 'react';
import PropTypes from 'prop-types';

function SingleFolderSidebar(props) {
  return (
    <aside>
      <button type="button" className="go-back">Go back</button>
      <p className="current-folder">Folder 3</p>
    </aside>
  )
}

SingleFolderSidebar.propTypes = {
  folderName: PropTypes.string,
  folderId: PropTypes.string,
}

export default SingleFolderSidebar;