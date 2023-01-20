import React from 'react';
import { Link } from 'react-router-dom';

export class NavigationMenu extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <div>
        {/* Menu toggle button */}
        <button onClick={this.toggleMenu}>Toggle Menu</button>
        {/* Menu container */}
        <nav className={this.state.isMenuOpen ? 'menu open' : 'menu'}>
          {/* Menu items */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }
}
