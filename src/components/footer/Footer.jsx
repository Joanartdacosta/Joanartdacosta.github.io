import React from "react";
import CurrentDate from "./CurrentDate";
import Social from "../social/Social";

function Footer() {
  return (
    <div>
      <div className="footer padding-2">
        <Social />
        <CurrentDate />
      </div>
    </div>
  );
}

export default Footer;
