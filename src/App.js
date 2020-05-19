import React from 'react';
import { Route } from 'react-router-dom';
import dummyStore from './dummy-store';
import FolderSidebar from './components/FolderSidebar';
import NoteList from './components/NoteList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dummyStore,
      folderClicked: null,
      noteClicked: null
    }
  }

  onFolderClick() {
    
  }

  render () {
    return (
      <>
        <header>
          <h1>Noteful</h1>
        </header>
        <main className='App'>
          {/* sidebar */}
          <Route 
            path='/'
            render={() => 
              <FolderSidebar folders={this.state.dummyStore.folders} />}
          />

         {/* main */}
         <Route
          path='/'
          render={() => 
            <NoteList notes={this.state.dummyStore.notes} />}
        />
        </main>
      </>
    );
  }

}

export default App;