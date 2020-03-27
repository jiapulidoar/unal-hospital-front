import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './components/Layouts/NavBar';
import Login from './containers/Login/Login.jsx'
import Dashboard from './containers/Dashboard/Dashboard';

// import configureStore from './store/configureStore';
// const store = configureStore();

class App extends Component {
    render() {
      return (
        <div id="app">
          <NavBar />
          <BrowserRouter>
            <Switch>
              {/* <Route path="/dashboard" component={Dashboard} /> */}
              <Route path="/login" component={Login} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));