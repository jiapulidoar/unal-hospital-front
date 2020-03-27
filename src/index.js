import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';

import NavBar from './components/Layouts/NavBar';
import Main from './components/Main/Main';  // TODO: reemplazar por Dashboard
import Login from './containers/Login/Login.jsx'


const store = configureStore();

class App extends Component {
    render() {
      return (
        <div id="app">
          <NavBar />
          <BrowserRouter>
            <Switch>
              {/* <Route path="/dashboard" component={Dashboard} /> */}
              <Route path="/dashboard" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Main} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));