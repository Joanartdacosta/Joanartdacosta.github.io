import React from "react";
import { Link } from "react-router-dom";
import LINKS from "../links";
import { HashLink, NavHashLink } from "react-router-hash-link";

function LinksRegular() {
  return (
    <div>
      {LINKS.map((link) => (
        <NavHashLink className="navbar-link" key={link.id} to={link.to}>
          {link.text}
        </NavHashLink>
      ))}
    </div>
  );
}

export default LinksRegular;
