import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div>
      <div className="title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I am Joana, ")
              .typeString("a passionate ")
              .typeString("<strong>Web-Developer</strong>.")
              .start();
          }}
        />
      </div>
    </div>
  );
}
