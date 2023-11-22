import LinksInline from "./navbar-inline/LinksInline";
import NavBarHamburguer from "./navbar-hamburguer/NavBarHamburger";

export default function NavBar() {
  return (
    <div>
      <div className="w-full navbar menu-normal justify-center bg-navbar">
        <div>
          <LinksInline />
        </div>
      </div>

      <div className="menu-hamburguer">
        <NavBarHamburguer />
      </div>
    </div>
  );
}
