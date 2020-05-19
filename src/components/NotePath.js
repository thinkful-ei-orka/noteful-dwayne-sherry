import React from  'react';
import SingleFolderSidebar from './SingleFolderSidebar';
import SingleNote from './SingleNote';

function NotePath(props) {
  console.log("Note Path")
  console.log(props)
  return (
    <div>
      <SingleFolderSidebar folderId={props.folder.id} folderName={props.folder.name}/>
      <SingleNote note={props.note}/>
    </div>

  )
}

export default NotePath;