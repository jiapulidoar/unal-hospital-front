import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";

import NavBar from "./components/Layouts/NavBar";
import Login from "./containers/Login/Login.jsx";
import Dashboard from "./containers/Dashboard/Dashboard";

ReactDOM.render(
  <>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
