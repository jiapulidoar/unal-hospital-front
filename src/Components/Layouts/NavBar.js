import React, { Component } from 'react';
import { Route  , Link } from 'react-router-dom';
import {Button, Icon, NavItem, Navbar} from 'react-materialize';

var logo = <Link to='/'>Dashboard</Link>

class NavBar extends Component {
  constructor(props){
    super();
  }
  render () {
    return(
      <Navbar brand={logo} right class="cyan lighten-2">
        <NavItem ><Link to='/table'>Table</Link></NavItem>
        <NavItem href=''><Icon>build</Icon></NavItem>
       </Navbar>
    )
  }
}

export default NavBar;
