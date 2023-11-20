import React from "react";
import { Link } from "react-router-dom";
import LINKS from "../links";
import Logo from "../icons/Logo";

function LinksHamburguer() {
  return (
    <div className="">
      <div>
        <Logo />
      </div>
      <div>
        {LINKS.map((link) => (
          <Link className="navbar-link-hamb" key={link.id} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LinksHamburguer;
