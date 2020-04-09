import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTable, faUserCircle, faMap } from '@fortawesome/free-solid-svg-icons'

import Login from "./containers/Login/Login.jsx";
import Dashboard from "./containers/Dashboard/Dashboard";
import CityMap from "./components/CityMap/CityMap";


import "bulma-calendar/dist/css/bulma-calendar.min.css"

import "./index.css";
import About from "containers/About/About";

library.add(faTable, faUserCircle, faMap)

const store = configureStore();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (() => {
        return sessionStorage.getItem("jwt") != null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      })()
    }
  >
    {console.log(sessionStorage.getItem("jwt"))}
  </Route>
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/map" component={CityMap} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
