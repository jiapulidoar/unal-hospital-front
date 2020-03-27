import React, { Component } from "react";
import { Icon, NavItem, Navbar } from "react-materialize";

class NavBar extends Component {
  render() {
    return (
      <Navbar brand={<a href="/">Hospital UN</a>} right class="cyan lighten-2">
        <NavItem>
          <a href="/dashboard">Dashboard</a>
        </NavItem>
        <NavItem>
          <a href="/">Login</a>
        </NavItem>
        <NavItem href="">
          <Icon>build</Icon>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
