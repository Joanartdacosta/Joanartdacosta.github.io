import React from "react";
import { Link } from "react-router-dom";
import links from "./links";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        <img
          className="navbar-logo"
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/newlogo.png"
          alt="logo-JC"
        ></img>
      </Link>

      <div className="navbar-menu">
        {links.map((link) => (
          <Link className="navbar-link" to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
