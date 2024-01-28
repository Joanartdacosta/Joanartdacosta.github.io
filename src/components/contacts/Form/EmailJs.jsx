import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonLight from "../../buttons/ButtonLight";

export default function EmailJs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        form.current,
        process.env.EMAIL_JS_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleStyle() {}

  const [selectedOption, setOption] = useState("Terms");

  function handleOptionChange(event) {
    setOption(event.target.value);
  }

  return (
    <div className="text-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-column justify-center m-auto"
      >
        <label className="padding-t-2 text-p">Name</label>
        <input
          className="w-full text-p"
          id="name"
          type="text"
          name="user_name"
          required
        />

        <label className="padding-t-2 text-p">Email</label>
        <input
          className="text-p w-full"
          id="email"
          type="email"
          name="user_email"
          required
        />

        <label className="padding-t-2 text-p">Message</label>
        <textarea
          className="contacts-textarea text-p"
          id="message"
          name="message"
          required
        />

        <hr />

        <label className="text-p padding-t-2">GDPR Legislation:</label>
        <div className="flex justify-between">
          <input
            required
            type="radio"
            value="terms"
            checked={selectedOption === "terms"}
            onChange={handleOptionChange}
            className="padding-2 align-self-baseline "
          />
          <label className="text-p align-self-baseline padding-l-1 m-b-2">
            I consent to the storage of my data in your file in accordance with
            the European Data Protection Regulation No. 67912016, GDPR
          </label>
        </div>

        <ButtonLight
          id="submit"
          label={"Let's talk!"}
          onClick={handleStyle}
          value="Let-s Talk!"
        />
      </form>
    </div>
  );
}
