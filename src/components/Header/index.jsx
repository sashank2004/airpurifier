import React, { useState } from 'react';
import './header.css';
import logo from "../../assets/microsoft.png";
import menu from '../../assets/menuiconblack.png';
import contactIcon from "../../assets/contact.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="headerContent">
        <img onClick={() => window.location = "/"} src={logo} alt="Purifier Logo" className="logo" />
        
        <div className="menuToggle" onClick={() => setShowMenu(!showMenu)}>
          <img src={menu} alt="Menu" className="menuIcon" />
        </div>

        <div className="desktopNav">
          <div className="navItem" onClick={() => window.location = "/"}>Home</div>
          <div className="navItem" onClick={() => window.location = "/products"}>Products</div>
          <div className="navItem" onClick={() => window.location = "/blogs"}>Blogs</div>
          <div className="navItem" onClick={() => window.location = "/aboutus"}>About Us</div>
        </div>

        <button className="contactBtn" onClick={() => window.location = "/contact"}>
          <img src={contactIcon} alt="Contact" className="contactIcon" />
          Contact Us
        </button>
      </div>

      <div className={`mobileMenu ${showMenu ? 'show' : ''}`}>
        <div onClick={() => {
          window.location = "/";
          setShowMenu(false);
        }}>Home</div>
        <div onClick={() => {
          window.location = "/products";
          setShowMenu(false);
        }}>Products</div>
        <div onClick={() => {
          window.location = "/blogs";
          setShowMenu(false);
        }}>Blogs</div>
        <div onClick={() => {
          window.location = "/aboutus";
          setShowMenu(false);
        }}>About Us</div>
        <div onClick={() => {
          window.location = "/contact";
          setShowMenu(false);
        }}>Contact Us</div>
      </div>
    </header>
  );
};

export default Header;
