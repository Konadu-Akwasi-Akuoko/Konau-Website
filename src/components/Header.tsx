/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/images/logo.svg";

function Header() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);

  const handleMenuClick = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  // If the menu is non-active, the menu will be hidden, and
  // it's state needs to be tracked with a useEffect hook.
  React.useEffect(() => {
    if (isMenuActive) {
      setIsHidden(false);
    } else {
      setTimeout(() => {
        setIsHidden(true);
      }, 600);
    }
  }, [isMenuActive]);

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
        {isMenuActive ? (
          <Icon
            className="header__nav-mobile__icon"
            icon="ep:close-bold"
            width="24"
            height="24"
            onClick={() => handleMenuClick()}
          />
        ) : (
          <Icon
            className="header__nav-mobile__icon"
            icon="heroicons-solid:menu-alt-4"
            width="24"
            height="24"
            onClick={() => handleMenuClick()}
          />
        )}

        <div
          className={
            (isMenuActive
              ? "header__nav-mobile__div-active "
              : "header__nav-mobile__div-non--active ") +
            (isHidden ? "header__nav-mobile__div-non--active-hidden " : "")
          }
        >
          <ul className="header__nav-mobile__div__ul">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
