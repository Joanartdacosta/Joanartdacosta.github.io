import Homepage from "../../components/home/homepage/Homepage";
import About from "../../pages/About/About";
import Contacts from "../Contacts/Contacts";
import Volunteer from "../Volunteering/Volunteer";
import Projects from "../Projects/Projects";
import Skills from "../SKills/Skills";
import Experience from "../Experience/Experience";
import NavBarHome from "../../components/navbar/Regular/NavbarHome";

export default function New() {
  return (
    <div>
      <div id="progress"></div>

      <NavBarHome />
      <div className="m-auto">
        <div className="">
          <Homepage />
        </div>

        <div className="max-width m-t-5 relative m-auto">
          <div id="about" className="justify-center m-auto m-b-5">
            <About />
          </div>
          <div id="skills" className="justify-center m-auto m-b-5 w-full">
            <Skills />
          </div>

          <div id="projects" className="justify-center m-auto m-b-5 w-full">
            <Projects />
          </div>

          <div id="contacts" className="justify-center m-auto m-b-5 w-full">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
