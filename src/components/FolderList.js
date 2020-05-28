import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

FolderList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  highlighted: PropTypes.bool,
}

export default FolderList;