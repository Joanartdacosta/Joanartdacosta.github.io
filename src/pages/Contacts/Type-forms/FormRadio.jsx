import { useState } from "react";
import React from "react-dom";

function Gender() {
  const [selectedOption, setOption] = useState("Gender");

  function handleOptionChange(event) {
    setOption(event.target.value);
  }

  return (
    <form>
      <div>
        <p>Gender:</p>

        <label className="contacts-other-label">
          <br />
          <input
            type="radio"
            value="female"
            checked={selectedOption === "female"}
            onChange={handleOptionChange}
          />

          <p>Female</p>
        </label>
      </div>

      <div>
        <label className="contacts-other-label">
          <input
            type="radio"
            value="male"
            checked={selectedOption === "male"}
            onChange={handleOptionChange}
          />

          <p>Male</p>
        </label>
      </div>
      <div>
        <label className="contacts-other-label">
          <input
            type="radio"
            value="other"
            checked={selectedOption === "other"}
            onChange={handleOptionChange}
          />
          <p>Other</p>
        </label>
      </div>
      <div>
        <label className="contacts-other-label">
          <input
            type="radio"
            value="not"
            checked={selectedOption === "not"}
            onChange={handleOptionChange}
          />
          <p>Prefer not to say</p>
        </label>
      </div>
    </form>
  );
}

export default Gender;
