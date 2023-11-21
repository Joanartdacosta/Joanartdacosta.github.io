import Homepage from "../../components/home/homepage/Homepage";
import About from "../../components/about/About";
import Contacts from "../../components/contacts/Contacts";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";

export default function Home() {
  return (
    <div>
      <div id="progress"></div>

      <div className="w-full">
        <div>
          <Homepage />
        </div>

        <div className="m-auto relative">
          <div
            id="about"
            className="bg-color-1 m-auto justify-center padding-tb-8 w-full"
          >
            <About />
          </div>

          <div
            id="skills"
            className="m-auto max-width justify-center padding-tb-8"
          >
            <Skills />
          </div>

          <div
            id="projects"
            className="bg-color-1 m-auto justify-center padding-tb-8 w-full"
          >
            <Projects />
          </div>

          <div
            id="contacts"
            className="bg-color-1 m-auto justify-center padding-tb-8 w-full"
          >
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
