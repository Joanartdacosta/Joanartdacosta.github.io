import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";

function NavBarHome() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <div>
      <Navbar />
    </div>
  );

  return (
    <div>
      <Logo />
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

export default NavBarHome;
