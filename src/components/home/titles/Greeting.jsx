function Greeting() {
  const date = new Date(),
    currentTime = date.getHours();

  if (currentTime < 12) {
    return <p className="greeting padding-t-30vh">Good Morning</p>;
  } else if (currentTime < 18) {
    return <p>Good Afternoon</p>;
  } else {
    return <p>Good Night</p>;
  }
}

export default Greeting;
