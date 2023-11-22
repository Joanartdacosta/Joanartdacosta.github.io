import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormTerms from "./Type-forms/FormTerms";
import ButtonLight from "../buttons/ButtonLight";

function EmailJs() {
  const form = useRef();

  const [send, setSend] = useState({
    name: "",
    email: "",
    message: "",
    isValid: false,
  });

  function handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    setSend({ [name]: value });
  }

  function validationCheck() {
    if (
      send.name.length > 3 &&
      send.message.length > 5 &&
      send.email.length > 7 &&
      send.email.includes("@") &&
      send.email.includes(".") &&
      (send.email || send.message !== 0)
    ) {
      setSend({ isValid: true });
      setSend.forceUpdate();
    }
  }

  function handleSubmit(event) {
    validationCheck();
    console.log("im here");
    if (send.isValid === true) {
      event.preventDefault();
      alert("thank you for your message");
      event.target.reset();
    } else {
      event.preventDefault();
      alert("you might have entered something wrong");
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1wug8mb",
        "contact_form",
        form.current,
        "gZCM5ZN3kriwCjMvy"
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

  return (
    <div className="text-white">
      <form
        ref={form}
        onSubmit={sendEmail && handleSubmit}
        className="flex flex-column justify-center m-auto"
      >
        <label className="padding-t-2">Name</label>
        <input
          onChange={handleChange}
          className="w-full text-base"
          id="name"
          type="text"
          name="user_name"
          required
        />

        <label className="padding-t-2">Email</label>
        <input
          onChange={handleChange}
          className="text-base w-full"
          id="email"
          type="email"
          name="user_email"
          required
        />

        <label className="padding-t-2">Message</label>
        <textarea
          onChange={handleChange}
          className="contacts-textarea text-base"
          id="message"
          name="message"
          required
        />

        <hr />

        <FormTerms required />
        <ButtonLight
          type="submit"
          id="submit"
          value="Let-s Talk!"
          onClick={alert}
          label={"Let's talk!"}
        />
      </form>
    </div>
  );
}

export default EmailJs;
