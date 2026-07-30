import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { appTitle } from "../globals/globals";
// 1. IMPORT THE CUSTOM HOOK HERE
// import useIsMobile from '../hooks/useIsMobile';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  // 2. CALL THE CUSTOM HOOK HERE, near your other hooks
  // const isMobile = useIsMobile();

  const toggleNav = () => {
    console.log("toggleNav");
    setShowNav(!showNav);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 600px)");
    mediaQuery.addEventListener("change", isDesktop);

    return () => mediaQuery.removeEventListener("change", isDesktop);
  }, []);

  /*
    3. THIS useEffect CAN REPLACE THE matchMedia/useEffect ABOVE
       if you want to use the custom hook approach instead.

    useEffect(() => {
        if (!isMobile) {
            setShowNav(false);
        }
    }, [isMobile]);
    */

  return (
    <header className={showNav ? "show" : ""}>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      {/**
       * HTML for the Hamburger icon modified from HTMl
       * found at this codepen:
       * https://codepen.io/RRoberts/pen/ZBYaJr
       */}
      <button
        className="btn-main-nav"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={toggleNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <Nav handleShowHideNav={toggleNav} />
    </header>
  );
};

export default Header;
