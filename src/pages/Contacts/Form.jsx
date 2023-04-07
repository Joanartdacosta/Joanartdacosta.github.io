import { useState } from "react";
import React from "react";

// Controller Component - Input type //

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

//   Radio Form - Gender //

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

// Coutry Form - Select //
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

// Text-area - comments sections //

function TextArea() {
  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <label className="contacts-label">
        <p>Any comments or suggestions?</p>
        <textarea
          className="contacts-textarea"
          value={comment}
          onChange={handleChange}
          placeholder="Please enter your comment here"
          row="3"
          cols="40"
        />
      </label>
    </form>
  );
}

//   terms - submit //
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

function Form() {
  function handleClick() {
    alert(
      "Your message was sent to me :) I will response as soon as possible. Thank you so much"
    );
  }

  return (
    <>
      <div>
        <div>
          <Input />
        </div>

        <div>
          <Gender />
        </div>

        <div>
          <Select />
        </div>

        <div>
          <TextArea />
        </div>

        <div>
          <Terms />
        </div>

        <a href="mailto:jrtdacosta@gmail.com">
          <button onCLick={handleClick}>Let's talk!</button>
        </a>
      </div>
    </>
  );
}

export default Form;
