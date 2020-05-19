import React from 'react';
import { render } from '@testing-library/react';

function FolderSidebar(props) {
  return (
    <aside>
      <button type="button" class="go-back">Go back</button>
      <p class="current-folder">Folder 3</p>
    </aside>
  )
}

export default FolderSidebar.js