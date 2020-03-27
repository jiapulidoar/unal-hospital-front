import React, { Component } from 'react';
import { Icon, NavItem, Navbar} from 'react-materialize';

class NavBar extends Component {
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
