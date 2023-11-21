import Logo from "../icons/Logo";
import LinksRegular from "./LinksRegular";
import NavBarHamburguer from "../Hamburguer/NavBarHamburger";

function NavBarHome() {
  return (
    <div>
      <div className="w-full bg-black navbar menu-normal justify-center padding-r-4">
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
