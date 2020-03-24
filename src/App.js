import React from 'react';
import { Switch, Route } from "react-router-dom";

//--------------------------------------------------------------
//Scenes
//--------------------------------------------------------------

import Home from "./scenes/Home";


function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
