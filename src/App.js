import React from 'react';
import dummyStore from './dummy-store';
import FolderSidebar from './components/FolderSidebar';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dummyStore }
    console.log(this.state.dummyStore.folders)
  }


  render () {
    return (
      <>
        <header>
          <h1>Noteful</h1>
        </header>
        <main className='App'>
         <FolderSidebar folders={this.state.dummyStore.folders} />
        </main>
      </>
    );
  }

}

export default App;