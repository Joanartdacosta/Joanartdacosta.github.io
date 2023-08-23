function Greeting() {
  const date = new Date(),
    currentTime = date.getHours();

  if (currentTime < 12) {
    return "Good Morning";
  } else if (currentTime < 18) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
}

export default Greeting;
