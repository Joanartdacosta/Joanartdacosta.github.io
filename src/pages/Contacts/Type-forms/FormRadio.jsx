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
        <label>Gender:</label>
        <br />
        <br />
        <input
          type="radio"
          value="female"
          checked={selectedOption === "female"}
          onChange={handleOptionChange}
        />

        <label>Female</label>
      </div>

      <div>
        <input
          type="radio"
          value="male"
          checked={selectedOption === "male"}
          onChange={handleOptionChange}
        />

        <label>Male</label>
      </div>
      <div>
        <input
          type="radio"
          value="other"
          checked={selectedOption === "other"}
          onChange={handleOptionChange}
        />
        <label>Other</label>
      </div>
      <div>
        <input
          type="radio"
          value="not"
          checked={selectedOption === "not"}
          onChange={handleOptionChange}
        />
        <label>Prefer not to say</label>
      </div>
    </form>
  );
}

export default Gender;
