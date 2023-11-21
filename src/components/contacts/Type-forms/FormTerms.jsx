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
        <div className="padding-t-2 padding-b-2">
          <label className="text-center">GDPR Legislation:</label>
          <br />
          <input
            required
            type="radio"
            value="terms"
            checked={selectedOption === "terms"}
            onChange={handleOptionChange}
          />
          <label>
            {" "}
            I consent to the storage of my data in your file in accordance with
            the European Data Protection Regulation No. 67912016, GDPR
          </label>
        </div>
      </form>
    </>
  );
}

export default Terms;
