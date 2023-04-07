import React from "react";
import CurrentDate from "./CurrentDate";
import Social from "../social/Social";

function Footer() {
  return (
    <div className="footer">
      <Social />
      <CurrentDate />
    </div>
  );
}

export default Footer;
