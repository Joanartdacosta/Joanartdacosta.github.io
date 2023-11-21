import React from "react";
import CurrentDate from "./CurrentDate";
import Social from "../social/Social";
// import "../../styles/page.css";

function Footer() {
  return (
    <div className="bg-gray w-full">
      <div className=" padding-2 flex flex-column justify-center align-items-center text-center">
        <Social />
        <CurrentDate />
      </div>
    </div>
  );
}

export default Footer;
