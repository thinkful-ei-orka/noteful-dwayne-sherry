import React from 'react';
import { Route } from 'react-router-dom';
import dummyStore from './dummy-store';
import MainPath from './components/MainPath';
import FolderPath from './components/FolderPath';
import NotePath from './components/NotePath';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dummyStore,
      folderClicked: null,
      noteClicked: null
    }
  }

  render () {
    return (
      <>
        <header>
          <h1>Noteful</h1>
        </header>
        <main className='App'>
          <Route 
            exact path='/'
            render={() => <MainPath 
              folders={this.state.dummyStore.folders}
              notes={this.state.dummyStore.notes}
            />}
          />

          <Route
            path="/folders/:folderId"
            render={({...routeProps}) => <FolderPath 
              folders={this.state.dummyStore.folders} 
              notes={this.state.dummyStore.notes.filter(note => {
                if(note.folderId === routeProps.match.params.folderId)
                  return true;
                return false;
              })}
              folderId={routeProps.match.params.folderId}
            />} 
          />

          <Route 
            path="/note/:noteId"
            render={({...routeProps}) => <NotePath 
              noteId={routeProps.match.params.noteId}
              note={this.state.dummyStore.notes.filter(note => {
                if(note.id === routeProps.match.params.noteId) {
                  return true;
                } return false;
              })}
              folderId={routeProps.match.params.folderId}
              folder={this.state.dummyStore.folders.filter(folder => {
                if(folder.id === routeProps.match.params.folderId) {
                  return true;
                } return false;
              })}
            />}
          />
        </main>
      </>
    );
  }

}

export default App;