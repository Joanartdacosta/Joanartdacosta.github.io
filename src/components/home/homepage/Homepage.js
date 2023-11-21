import HomeVideo from "../video/HomeVideo";
import Title from "../titles/Title.jsx";
import Greeting from "../titles/Greeting.jsx";
import ButtonBlack from "../../buttons/ButtonBlack";

export default function Homepage() {
  return (
    <div className="max-width h-screen">
      <HomeVideo />

      <div className="flex flex-column padding-l-4 padding-t-2">
        <div className="relative">
          <Greeting />
          <Title />
          <div className="padding-t-2">
            <ButtonBlack label={"Portfolio"} />
          </div>
        </div>
      </div>
    </div>
  );
}
