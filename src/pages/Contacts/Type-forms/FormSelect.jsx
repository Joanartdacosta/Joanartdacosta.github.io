import { useState } from "react";
import React from "react";

function Select() {
  const [country, setCountry] = useState("");

  function handleChange(event) {
    setCountry(event.target.value);
  }

  return (
    <form>
      <label className="contact-labels">
        <p>Where do you live?</p>
        <select
          className="contacts-select"
          value={country}
          onChange={handleChange}
        >
          <option value="Select an option">Select an option</option>
          <option value="Germany">Germany</option>
          <option value="Portugal">Portugal</option>
          <option value="Italy">Italy</option>
          <option value="Brazil">Brazil</option>
          <option value="Spain">Spain</option>
          <option value="Denmark">Denmark</option>
          <option value="United-Kingdom">United Kingdom</option>
          <option value="New-Zealand">New Zealand</option>
          <option value="Spain">Other</option>
          <option value="No">Prefer not to say</option>
        </select>
      </label>
    </form>
  );
}

export default Select;
