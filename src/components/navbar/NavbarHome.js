import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@font";

function NavBarHome() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(true);
  }

  function hide() {
    setOpenMenu(false);
    return <Navbar />;
  }

  function show() {
    setOpenMenu(true);
  }

  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        <img
          open={openMenu}
          className="navbar-logo"
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/newlogo.png"
          alt="logo-JC"
        ></img>
      </Link>

      <div className="navbar">
        <Link
          onClick={toggleMenu}
          onBlur={hide}
          onFocus={show}
          to="/"
          className={`menu ${openMenu ? <Navbar /> : "navbar-menu-icon"}`}
        >
          <img
            className="navbar-menu-icon"
            src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/3844438_hamburger_menu_more_navigation_icon.png"
            alt="menu"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBarHome;
