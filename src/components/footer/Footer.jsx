import React from "react";
import CurrentDate from "./CurrentDate";
import Social from "../social/Social";
// import "../../styles/page.css";

function Footer() {
  return (
    <div>
      <div className="bg-gray padding-2 flex flex-column justify-center align-items-center">
        <Social />
        <CurrentDate />
      </div>
    </div>
  );
}

export default Footer;
