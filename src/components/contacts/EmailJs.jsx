import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormTerms from "./Type-forms/FormTerms";

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
    <div className="">
      <form ref={form} onSubmit={sendEmail}>
        <input className="contacts-input" type="hidden" name="contact_number" />
        <label className="text-base">Name</label>
        <input className="contacts-textarea" type="text" name="user_name" />

        <label className="text-base">Email</label>
        <input className="contacts-textarea" type="email" name="user_email" />

        <label className="text-base">Message</label>
        <textarea className="contacts-textarea text-base" name="message">
          Por favor escreva a sua mensagem.
        </textarea>
        <hr />

        <FormTerms />
        <button type="submit" value="Let-s Talk!">
          Let's talk!
        </button>
      </form>
    </div>
  );
}

export default EmailJs;
