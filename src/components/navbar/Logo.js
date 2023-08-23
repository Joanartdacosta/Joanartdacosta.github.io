import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="navbar-link" to="/">
      <img
        className="navbar-logo"
        src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/newlogo.png"
        alt="logo-JC"
      ></img>
    </Link>
  );
}

export default Logo;
