import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormTerms from "./Type-forms/FormTerms";
import ButtonLight from "../buttons/ButtonLight";

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
    <div className="text-white">
      <form ref={form} onSubmit={sendEmail} className="flex flex-column">
        <label className="">Name</label>
        <input className="contacts-textarea" type="text" name="user_name" />

        <label className="">Email</label>
        <input className="contacts-textarea" type="email" name="user_email" />

        <label className="">Message</label>
        <textarea className="contacts-textarea" name="message" />

        <hr />

        <FormTerms />
        <ButtonLight type="submit" value="Let-s Talk!" label={"Let's talk!"} />
      </form>
    </div>
  );
}

export default EmailJs;
