import { useState } from "react";
import React from "react";

function Input() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [phone, setPhone] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  return (
    <form className="contacts-form">
      <label className="labels">
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter your name"
        />
      </label>

      <label className="contact-labels">
        <p>Email:</p>
        <input
          required
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter your Email"
        />
      </label>

      <label className="contact-labels">
        <p>Phone:</p>
        <input
          type="numbers"
          value={phone}
          onChange={handleChangePhone}
          placeholder="Phone"
          min-length={9}
        />
      </label>
    </form>
  );
}

export default Input;
