import React from 'react';
import { NavLink } from 'react-router-dom';

function FolderList(props) {
  // if using Link
  // let className = "folders"
  // if (props.highlighted === true) {
  //   className += " highlighted";
  // }
  return (
    <div className="folders">
      <NavLink to={`/folders/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}


export default FolderList;