import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, NavbarBrand, Nav, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
            <NavbarBrand href="/">Shares App</NavbarBrand>
            <NavbarToggler/>
            <Collapse isOpen="true" navbar>
                <Nav left>
                    <NavItem>
                        <NavLink href="/components/">Shares</NavLink>
                   </NavItem>
                   <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Portfolio</NavLink>
                   </NavItem>
                   <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Trade Notes</NavLink>
                   </NavItem>
                </Nav>
            </Collapse>
             
        </Navbar>
      </div>
    );
  }
}
export default App;
