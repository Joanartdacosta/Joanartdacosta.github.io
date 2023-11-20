import React from "react";
import { Link } from "react-router-dom";
import LINKS from "../links";

function LinksRegular() {
  return (
    <div>
      {LINKS.map((link) => (
        <Link className="navbar-link" key={link.id} to={link.to}>
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default LinksRegular;
