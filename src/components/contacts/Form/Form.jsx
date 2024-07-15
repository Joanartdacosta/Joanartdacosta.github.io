import React, { useState } from "react";
import ButtonLight from "../../buttons/ButtonLight";

export default function Form() {
  const [label, setLabel] = useState("Let's talk!");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function changeStyle() {
    setLabel("Thank you!");
  }

  return (
    <div className="text-white">
      <form
        action={process.env.NEXT_PUBLIC_FORM_ACTION_URL}
        className="flex flex-column justify-center m-auto"
        method="POST"
      >
        <label className="padding-t-2 text-p">Name</label>
        <input
          className="w-full text-p"
          id="name"
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="padding-t-2 text-p">Email</label>
        <input
          className="text-p w-full"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="padding-t-2 text-p">Message</label>
        <textarea
          className="contacts-textarea text-p"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <hr />
        <label className="text-p padding-t-2">GDPR Legislation:</label>
        <div className="flex justify-between">
          <label className="text-p align-self-baseline padding-l-1 m-b-2">
            - When you click the 'Let's talk' button below, you are affirming
            your consent for the storage of your data in compliance with the
            European Data Protection Regulation No. 679/2016 (GDPR).
          </label>
        </div>
        <ButtonLight
          onClick={changeStyle}
          type="submit"
          id="submit"
          value="Send"
          label={label}
        />
      </form>
    </div>
  );
}
