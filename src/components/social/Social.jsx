import React from "react";
import SOCIALS from "./socials";

export default function Social() {
  return (
    <div className="social-icons padding-2">
      {SOCIALS.map((social) => (
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
