import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import './NavMenu.css';
import './styles.css';

import company_logo from '../images/company_logo.jpg';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      openLoginModal: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleLoginModal = () => {
    console.log(this.state.openLoginModal)
    if(this.state.openLoginModal)
    {
      this.setState({
        openLoginModal: false
      });
    }
    else{
      this.setState({
        openLoginModal: true
      });
    }
  }


  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
           <img className='company_logo' src={company_logo}/>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="#" onClick={this.toggleLoginModal}>Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/registration">Register</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.openLoginModal ? <LoginModal status={this.state.openLoginModal}/> : <></>}
      </header>
    );
  }
}
/*
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
*/