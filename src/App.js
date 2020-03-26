import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import configureStore from './Store/configureStore';
import NavBar from './Components/Layouts/NavBar';
import Main from './Components/Main/Main';
import './App.css';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
         <NavBar />
          <Main />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
