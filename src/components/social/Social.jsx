import React from "react";
import SOCIALS from "./socials";

function Social() {
  return (
    <div className="social-icons">
      {SOCIALS.map((social) => (
        <a href={social.href}>
          <img className="social-icon" src={social.url} alt={social.text}></img>
        </a>
      ))}
    </div>
  );
}

export default Social;
