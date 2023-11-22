export default function Greeting() {
  const date = new Date(),
    currentTime = date.getHours();

  if (currentTime < 12) {
    return <p className="greeting md-greeting">Good Morning</p>;
  } else if (currentTime < 18) {
    return <p className="greeting md-greeting">Good Afternoon</p>;
  } else {
    return <p className="greeting md-greeting">Good Night</p>;
  }
}
