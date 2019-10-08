import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import pdf from '../dat/zambella_resume.pdf';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-dark text-large navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 background_a" light>
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2 text-light" />
            <Collapse className="d-sm-inline-flex flex-sm-row text-light" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" href={pdf}>Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" href="mailto:lukezambella.com">Contact</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
