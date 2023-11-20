import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DarkLight() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Link
      className={`DarkLight ${theme}`}
      onClick={() => setTheme(toggleTheme)}
    >
      <img
        className="dark-img"
        src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/8679479_switch_icon.png"
        alt="switch-dark"
      />
    </Link>
  );
}

export default DarkLight;
