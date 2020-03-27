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
      <Navbar brand={<a href="/">Dashboard</a>} right class="cyan lighten-2">
        <NavItem ><a href='/table'>Table</a></NavItem>
        <NavItem href=''><Icon>build</Icon></NavItem>
       </Navbar>
    )
  }
}

export default NavBar;
