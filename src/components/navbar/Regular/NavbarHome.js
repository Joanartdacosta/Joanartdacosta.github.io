import LinksRegular from "./LinksRegular";
import NavBarHamburguer from "../Hamburguer/NavBarHamburger";

function NavBarHome() {
  return (
    <div>
      <div className="w-full bg-navbar menu-normal justify-center bg-navbar">
        <div>
          <LinksRegular />
        </div>
      </div>

      <div className="menu-hamburguer">
        <NavBarHamburguer />
      </div>
    </div>
  );
}

export default NavBarHome;
