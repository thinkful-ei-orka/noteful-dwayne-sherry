import React from 'react';

function SingleFolderSidebar(props) {
  console.log("SingleFolderSidebar ran");
  console.log(props);
  return (
    <aside>
      <button type="button" className="go-back">Go back</button>
      <p className="current-folder">Folder 3</p>
    </aside>
  )
}

export default SingleFolderSidebar;