import React from "react";
import socials from "./socials";

function Social() {
  return (
    <div className="social-icons">
      {socials.map((social) => (
        <a href={social.href}>
          <img className="social-icon" src={social.url} alt={social.text}></img>
        </a>
      ))}
    </div>
  );
}

export default Social;
