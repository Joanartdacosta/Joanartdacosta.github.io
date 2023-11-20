export default function HomeVideo() {
  const videoPink =
    "https://joana-personal-website.s3.eu-central-1.amazonaws.com/video/pexels-mart-production-7565976+(1080p).mp4";

  const colors =
    "https://joana-personal-website.s3.eu-central-1.amazonaws.com/video/production_id_4377755+(2160p).mp4";

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
