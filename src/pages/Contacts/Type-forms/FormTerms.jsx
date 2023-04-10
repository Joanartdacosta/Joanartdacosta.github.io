import { useState } from "react";
import React from "react";

function Terms() {
  const [selectedOption, setOption] = useState("Terms");

  function handleOptionChange(event) {
    setOption(event.target.value);
  }

  return (
    <>
      <form>
        <div>
          <label className="contacts-label">
            <p>GDPR Legislation:</p>
            <input
              required
              type="radio"
              value="terms"
              checked={selectedOption === "terms"}
              onChange={handleOptionChange}
            />
            I consent to the storage of my data in your file in accordance with
            the European Data Protection Regulation No. 67912016, GDPR
          </label>
        </div>
      </form>
    </>
  );
}

export default Terms;
