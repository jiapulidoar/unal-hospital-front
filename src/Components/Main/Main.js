import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DataTable from '../Table/Table';

const Main = () => (
  <Switch>
  	<Route exact path='/' render={()=>( (<DataTable />) )}/>
    <Route exact path='/table' component={DataTable}/>
  </Switch>
)

export default Main
