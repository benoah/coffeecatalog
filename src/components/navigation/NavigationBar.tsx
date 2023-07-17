import React, { useState, useCallback } from 'react';
import '../../sass/NavigationBar.scss';

import HamburgerIcon from './HamburgerIcon';
import NavbarAvatar from './NavbarAvatar';

// Import image outside the component
const avatarImage = require("../../assets/image.png");

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return (
       <nav className="nav">
      <header className={`navbar ${isOpen ? "open" : ""}`}>
        <div
          className="navbar__button"
          onClick={handleMenuToggle}
          aria-label="Navigation Menu"
        >
          <HamburgerIcon />
        </div>
        {isOpen && (
          <div className="navbar__dropdown">
          <a href="google.com" role="menuitem" className="navbar__link">Link 1</a>
          <a href="google.com" role="menuitem" className="navbar__link">Link 2</a>
          <a href="google.com" role="menuitem" className="navbar__link">Link 3</a>

          </div>
        )}
        <div className="navbar__avatar">
          <NavbarAvatar imageUrl={avatarImage} alt="User Avatar" />
        </div>
      </header>
    </nav>
  );
};

export default NavigationBar;
