import HomeVideo from "../video/HomeVideo";
import Title from "../titles/Title.jsx";
import Greeting from "../titles/Greeting.jsx";
import ButtonBlack from "../../buttons/ButtonBlack";

export default function Homepage() {
  return (
    <div className="h-screen w-full md-screen">
      <HomeVideo />

      <div className="flex flex-column m-auto md-max-width md-height">
        <div className="relative padding-t-20vh md-auto padding-left">
          <Greeting />
          <Title />
          <div className="padding-t-2 md-button-width m-b-4">
            <ButtonBlack label={"Portfolio"} href={"#projects"} />
          </div>
        </div>
      </div>
    </div>
  );
}
