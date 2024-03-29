import About from "../../components/about/About";
import AboutGallery from "../../components/about-gallery/AboutGallery";
import Contacts from "../../components/contacts/Contacts";
import Homepage from "../../components/home/homepage/Homepage";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

export default function Home() {
  return (
    <div>
      <div id="progress"></div>

      <div className="">
        <div>
          <Homepage />
        </div>

        <div className="m-auto relative">
          <div
            id="about"
            className="bg-black m-auto justify-center padding-tb-8 w-full"
          >
            <About />
          </div>

          <div id="skills" className="m-auto justify-center padding-tb-8">
            <Skills />
          </div>

          <div
            id="projects"
            className="bg-black m-auto justify-center padding-tb-8 w-full"
          >
            <Projects />
          </div>

          <div id="projects" className="m-auto justify-center">
            <AboutGallery />
          </div>

          <div
            id="contacts"
            className="bg-black m-auto justify-center padding-tb-8 w-full"
          >
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
