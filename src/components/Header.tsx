import React from "react";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header body__padding-horizontal header__padding-vertical">
      <a href="#main">
        <img src={Logo} alt="Website logo" className="header__img" />
      </a>
      <nav className="header__nav-desktop">
        <a href="https://twitter.com/akuoko_konadu" className="header__nav__a">
          About
        </a>
        <a href="https://twitter.com/akuoko_konadu" className="header__nav__a">
          Work
        </a>
        <a href="https://twitter.com/akuoko_konadu" className="header__nav__a">
          Contact
        </a>
        <a href="https://twitter.com/akuoko_konadu" className="header__nav__a">
          Blog
        </a>
      </nav>
      <nav className="header__nav-mobile">
        <span className="checkbox-container">
          <input className="checkbox-trigger" type="checkbox" />
          <span className="menu-content">
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
            <span className="hamburger-menu" />
          </span>
        </span>
      </nav>
    </header>
  );
}

export default Header;
