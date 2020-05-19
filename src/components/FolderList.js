import React from 'react';

function FolderList(props) {
  return (
    <div className="folders">
      <h2>{props.name}</h2>
      {/* <NavLink to="/">{props.name}</NavLink> */}
    </div>
  )
}


export default FolderList;