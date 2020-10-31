import React, { Component, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });

    return (
      <Navbar dark expand="md">
        <NavbarBrand href="#" className="font-weight-bold">
          Jon George
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">about</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">resume</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">articles</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
