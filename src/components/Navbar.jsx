import React from 'react';
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import "./navbar.css";  

function Navbar() {
    return (
      <div className="navbar">
           <div className="logo-container">
          <Logo />
      </div>
        <nav>
          <ul className="navbar-items">
              <li>Comprimidos</li>
              <li>Jarabes</li>
              <li>Cremas</li>
          </ul>
      </nav>
      <div className="cart-container">
          <CartWidget />
      </div>
  </div>
    );
}

export default Navbar;
