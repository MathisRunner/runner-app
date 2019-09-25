import React from 'react'
import { Link } from 'gatsby';
import {Nav} from './Navbar.css.js';
import {withTheme} from 'styled-components';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      activeStyles: {color: props.theme.primary}
    }
  }

  render() {
    return (
      <Nav
        className={`navbar is-transparent ${this.props.className}`}
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
        key="navbar"
      >
        <div className="container-left">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo" activeStyle={this.state.activeStyles}>
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              <h1>Earthy Games</h1>
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/games" activeStyle={this.state.activeStyles}>
                Games
              </Link>
              <Link className="navbar-item" to="/about" activeStyle={this.state.activeStyles}>
                About
              </Link>
            </div>
          </div>
        </div>
      </Nav>
    )
  }
}

export default withTheme(Navbar);

