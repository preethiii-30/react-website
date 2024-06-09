import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
      const body = document.getElementsByTagName('body')[0];
      if (body) {
        body.style.overflow = showMenu ? 'auto' : 'hidden';
      }
    };
  
    return (
      <nav id="navbar">
        <div className="logo"><img src='images/Logo.png' alt='Logo'></img></div>
        <ul className={`menu ${showMenu ? 'show' : ''}`}>
          <li><a href="#service" onClick={handleMenuToggle}>Search for services</a></li>
          <li><a href="#reviews" onClick={handleMenuToggle}>Reviews</a></li>
          <li><a href="#contact" onClick={handleMenuToggle}>Contact</a></li>
        </ul>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <i className="fa fa-bars"></i>
        </button>
        {showMenu && <div className="overlay" onClick={handleMenuToggle}></div>}
      </nav>
    );
  };
  
export default Navbar;