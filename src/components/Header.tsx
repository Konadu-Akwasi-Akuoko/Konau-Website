import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/images/logo.svg";

// TODO: current section in the a user is in the header

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
    <div style={{ position: "relative", display: "unset" }}>
      <header className="header body__padding-horizontal header__padding-vertical">
        <a href="/">
          <img src={Logo} alt="Website logo" className="header__img" />
        </a>
        <nav className="header__nav-desktop">
          <a href="#about" className="header__nav__a">
            About
          </a>
          <a href="#work" className="header__nav__a">
            Work
          </a>
          <a href="#contact" className="header__nav__a">
            Contact
          </a>
          {/* Removing the blog since I have no blog as of now */}
          {/* <a href="https://twitter.com/akuoko_konadu" className="header__nav__a">
          Blog
        </a> */}
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
              <a
                href="#about"
                onClick={() => {
                  setIsMenuActive((prevState) => !prevState);
                }}
              >
                <li>About</li>
              </a>
              <a
                href="#work"
                onClick={() => {
                  setIsMenuActive((prevState) => !prevState);
                }}
              >
                <li>Work</li>
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setIsMenuActive((prevState) => !prevState);
                }}
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
