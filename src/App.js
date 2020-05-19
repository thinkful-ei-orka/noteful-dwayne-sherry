import React from 'react';
import dummyStore from './dummy-store';
import FolderSidebar from './components/FolderSidebar';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dummyStore }
  }

  render () {
    return (
      <>
      <header>
        <h1>Noteful</h1>
    </header>
      <main className='App'>
        <FolderSidebar /* List of folders, add-folder button fn */ />
        {/* content goes here */}
      </main>
      </>
    );
  }

}

export default App;