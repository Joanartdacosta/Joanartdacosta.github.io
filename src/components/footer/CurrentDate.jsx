import React from "react";

function CurrentDate() {
  const currentYear = new Date().getFullYear(),
    time = new Date().toLocaleTimeString();

  return (
    <div className="align-self-center">
      <p>
        {time} © {currentYear} by joana costa - web developer.
      </p>
    </div>
  );
}

export default CurrentDate;
