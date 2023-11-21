import Homepage from "../../components/home/homepage/Homepage";
import About from "../../components/about/About";
import Contacts from "../../components/contacts/Contacts";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import NavBarHome from "../../components/navbar/Regular/NavbarHome";

export default function Home() {
  return (
    <div>
      <div id="progress"></div>

      <NavBarHome />
      <div className="m-auto">
        <div className="">
          <Homepage />
        </div>

        <div className="relative m-auto">
          <div
            id="about"
            className="max-width justify-center m-auto bg-color-1"
          >
            <About />
          </div>
          <div
            id="skills"
            className="max-width justify-center m-auto m-b-5 w-full"
          >
            <Skills />
          </div>

          <div
            id="projects"
            className="justify-center m-auto m-b-5 w-full bg-color-3"
          >
            <Projects />
          </div>

          <div
            id="contacts"
            className="max-width justify-center m-auto m-b-5 w-full"
          >
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
