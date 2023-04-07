import React from "react";

function CurrentDate() {
  const currentYear = new Date().getFullYear(),
    time = new Date().toLocaleTimeString();

  return (
    <div className="footer-time">
      <p>
        {time} © {currentYear} by joana costa
      </p>
    </div>
  );
}

export default CurrentDate;
