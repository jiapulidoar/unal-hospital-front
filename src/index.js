import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTable, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Login from "./containers/Login/Login.jsx";
import Dashboard from "./containers/Dashboard/Dashboard";
import CityMap from "./components/CityMap/CityMap";

import "./index.css";

library.add(faTable, faUserCircle)

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
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
