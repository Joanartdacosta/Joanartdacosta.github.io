import React from "react";

function CurrentDate() {
  const currentYear = new Date().getFullYear(),
    time = new Date().toLocaleTimeString();

  return (
    <div className="align-self-center md-max-width">
      <p className="text-base md-text-base">{time}</p>
      <p className="text-base md-text-base">
        © {currentYear} by joana costa - web developer.
      </p>
    </div>
  );
}

export default CurrentDate;
