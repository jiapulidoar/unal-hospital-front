import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";

import NavBar from "./components/Layouts/NavBar";
import Login from "./containers/Login/Login.jsx";
import Dashboard from "./containers/Dashboard/Dashboard";

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
  <>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
