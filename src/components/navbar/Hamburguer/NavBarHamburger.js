import { Link } from "react-router-dom";
import { useState } from "react";
import LinksHamburguer from "./LinksHamburguer";

export default function NavBarHamburguer() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <div className="w-full text-center">
      <LinksHamburguer />
    </div>
  );

  return (
    <div className="bg-color-1">
      <Link onClick={() => setOpenMenu(!openMenu)}>
        {" "}
        <img
          className="navbar-menu-icon"
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/menu-svgrepo-com.svg"
          alt="menu"
        />
      </Link>
      {openMenu && menu}
    </div>
  );
}
