import HomeVideo from "../video/HomeVideo";
import Title from "../titles/Title.jsx";
import Greeting from "../titles/Greeting.jsx";
import ButtonBlack from "../../buttons/ButtonBlack";
import NavBarHome from "../../navbar/Regular/NavbarHome";

export default function Homepage() {
  return (
    <div>
      <NavBarHome />

      <div className="h-screen w-full">
        <HomeVideo />

        <div className="flex flex-column m-auto padding-t-2 md-max-width">
          <div className="relative padding-t-20vh md-auto xl-margin">
            <Greeting />
            <Title />
            <div className="padding-t-2">
              <ButtonBlack label={"Portfolio"} href={"/projects"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
