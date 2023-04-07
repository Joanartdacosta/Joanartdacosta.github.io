import React, { useState } from "react";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";

function Name() {
  const [isMousedOver, setMouseOver] = useState("false"),
    [name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h3 className="about-greeting-title">
        <Greeting /> {name}
      </h3>

      <form onSubmit={handleChange}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />

        <Link to="/contacts">
          <button
            style={{
              backgroundColor: isMousedOver
                ? "rgb(0, 0, 0, 0.60)"
                : "rgb(0, 0, 0, 0.85)",
            }}
            className={isMousedOver ? "class1" : "class2"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Let's talk!
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Name;
