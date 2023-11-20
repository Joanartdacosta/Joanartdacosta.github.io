import HomeVideo from "../video/HomeVideo";
import Title from "../titles/Title.jsx";
import Welcome from "../titles/Welcome";
import ButtonBlack from "../../../components2/ButtonBlack";

export default function Homepage() {
  return (
    <div className="max-width h-screen">
      <HomeVideo />

      <div className="flex flex-column padding-left padding-top">
        <div className="relative">
          <Welcome />
          <Title />
          <div className="padding-top-2">
            <ButtonBlack label={"Portfolio"} />
          </div>
        </div>
      </div>
    </div>
  );
}
