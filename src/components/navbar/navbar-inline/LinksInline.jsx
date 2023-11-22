import React from "react";
import { NavHashLink } from "react-router-hash-link";
import NAVBAR_LINKS from "../navbar_links";

export default function LinksInline() {
  return (
    <div>
      {NAVBAR_LINKS.map((link) => (
        <NavHashLink
          className="navbar-link cursor-pointer"
          key={link.id}
          to={link.to}
        >
          {link.text}
        </NavHashLink>
      ))}
    </div>
  );
}
