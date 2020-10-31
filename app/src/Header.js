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
import "./Header.css";

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
      <div>
        <Navbar className="header" expand="md">
          <NavbarBrand href="#" className="title">
            Jon George
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
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
      </div>
    );
  }
}

export default Header;
