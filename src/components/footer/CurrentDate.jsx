import React from "react";

export default function CurrentDate() {
  const currentYear = new Date().getFullYear(),
    hour = new Date().getUTCHours(),
    minutes = new Date().getUTCHours(),
    hourtotal = hour + ":" + minutes,
    data = hourtotal.toString();

  return (
    <div className="align-self-center md-max-width">
      <p className="text-p md-text-p">{data}</p>
      <p className="text-p md-text-p">
        © {currentYear} by joana costa - web developer.
      </p>
    </div>
  );
}
