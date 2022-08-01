import React from "react";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header body__padding-horizontal header__padding-vertical">
      <img src={Logo} alt="Website logo" className="header--img" />
      <nav className="header--nav">
        <a href="https://example.com" className="header--nav--a">
          About
        </a>
        <a href="https://example.com" className="header--nav--a">
          Work
        </a>
        <a href="https://example.com" className="header--nav--a">
          Contact
        </a>
        <a href="https://example.com" className="header--nav--a">
          Blog
        </a>
      </nav>
    </header>
  );
}

export default Header;
