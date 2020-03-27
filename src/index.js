import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import NavBar from './components/Layouts/NavBar';
import Main from './components/Main/Main';

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

ReactDOM.render(<App />, document.getElementById('root'));