import React from "react";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header body__padding-horizontal header__padding-vertical">
      <a href="#main">
        <img src={Logo} alt="Website logo" className="header__img" />
      </a>
      <nav className="header__nav">
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
    </header>
  );
}

export default Header;
