import React from "react";
import Typewriter from "typewriter-effect";

function Title() {
  return (
    <div className="home-presentation">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I am Joana, ")
            .typeString("a passionate <strong>Web-Developer</strong>.")
            .pauseFor(700)
            .deleteAll()
            .typeString("Come ")
            .typeString("and have a look at my page")
            .start();
        }}
      />
    </div>
  );
}

export default Title;
