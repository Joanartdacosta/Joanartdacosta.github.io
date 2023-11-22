import LinksInline from "./navbar-inline/LinksInline";
import NavBarHamburguer from "./navbar-hamburguer/NavBarHamburger";

export default function NavBar() {
  return (
    <div>
      <div className="w-full bg-black navbar menu-normal justify-center">
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
