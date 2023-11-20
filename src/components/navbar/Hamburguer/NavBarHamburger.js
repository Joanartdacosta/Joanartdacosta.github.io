import { Link } from "react-router-dom";
import { useState } from "react";
import LinksHamburguer from "./LinksHamburguer";

export default function NavBarHamburguer() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <div className="navbar-hamburguer bg-black w-full">
      <LinksHamburguer />
    </div>
  );

  return (
    <div className="bg-black w-screen">
      <Link onClick={() => setOpenMenu(!openMenu)}>
        {" "}
        <img
          className="navbar-menu-icon"
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/3844438_hamburger_menu_more_navigation_icon.png"
          alt="menu"
        />
      </Link>
      {openMenu && menu}
    </div>
  );
}
