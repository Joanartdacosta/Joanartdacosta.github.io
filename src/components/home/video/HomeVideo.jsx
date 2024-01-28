export default function HomeVideo() {
  const colors =
    "https://joana-personal-website.s3.eu-central-1.amazonaws.com/video/colors-joc.mp4";

  return (
    <div>
      {" "}
      <video
        autoPlay="autoplay"
        muted
        loop="loop"
        className="video object-cover w-full h-screen absolute"
      >
        <source src={colors} type="video/mp4" />
      </video>
    </div>
  );
}
