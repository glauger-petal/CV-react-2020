import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-bottom bg-grey font-weight-bold d-flex justify-content-center" expand="md">
            <NavbarToggler onClick={this.toggle}>
               <i className="fa fa-bars fa-lg txt-green"></i>
            </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink className="text-center ml-2 mr-2" href="#skills" onClick={this.toggle}>Mes compétences</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center ml-2 mr-2" href="#portfolio" onClick={this.toggle}>Mon portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center ml-2 mr-2" href="#studies" onClick={this.toggle}>Mes études</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center ml-2 mr-2" href="#expe" onClick={this.toggle}>Mes expériences</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center  ml-2 mr-2" href="#contact" onClick={this.toggle}>Contact</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
