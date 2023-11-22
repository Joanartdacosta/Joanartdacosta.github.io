import React from "react";
import { NavHashLink } from "react-router-hash-link";
import NAVBAR_LINKS from "../navbar_links";

export default function LinksHamburguer() {
  return (
    <div className="">
      <div>
        {NAVBAR_LINKS.map((link) => (
          <NavHashLink
            className="navbar-link-hamb cursor-pointer"
            key={link.id}
            to={link.to}
          >
            {link.text}
          </NavHashLink>
        ))}
      </div>
    </div>
  );
}
