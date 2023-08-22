import React from "react";
import socials from "./socials";

function Social() {
  return (
    <div className="social-icons">
      {socials.map((social) => (
        <a key={social.id} href={social.href}>
          <img
            className="social-icon"
            key={social.id}
            src={social.url}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}

export default Social;
