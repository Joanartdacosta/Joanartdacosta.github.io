import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTerms from "./FormTerms";

function EmailJs() {
  const form = useRef();

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
    <div className="contacts-form">
      <form ref={form} onSubmit={sendEmail}>
        <input className="contacts-input" type="hidden" name="contact_number" />
        <label className="contacts-label">Name</label>
        <input className="contacts-textarea" type="text" name="user_name" />

        <label className="contacts-label">Email</label>
        <input className="contacts-textarea" type="email" name="user_email" />
        <FormRadio />
        <hr />
        <FormSelect />

        <hr />
        <FormTerms />
        <hr />
        <label className="contacts-label">Message</label>
        <textarea className="contacts-textarea" name="message"></textarea>
        <button type="submit" value="Let-s Talk!">
          Let's talk!
        </button>
      </form>
    </div>
  );
}

export default EmailJs;
