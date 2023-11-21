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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-column justify-center m-auto"
      >
        <label className="padding-t-2">Name</label>
        <input className="w-full text-base" type="text" name="user_name" />

        <label className="padding-t-2">Email</label>
        <input className="text-base w-full" type="email" name="user_email" />

        <label className="padding-t-2">Message</label>
        <textarea className="contacts-textarea text-base" name="message" />

        <hr />

        <FormTerms />
        <ButtonLight type="submit" value="Let-s Talk!" label={"Let's talk!"} />
      </form>
    </div>
  );
}

export default EmailJs;
