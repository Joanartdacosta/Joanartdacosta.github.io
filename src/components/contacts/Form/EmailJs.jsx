import React, { useState } from "react";
import ButtonLight from "../../buttons/ButtonLight";

export default function EmailJs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    fetch("https://formcarry.com/s/FU7k3BDJUDw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, name: name, message: message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <div className="text-white">
      <form
        onSubmit={submit}
        className="flex flex-column justify-center m-auto"
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
        />
        <label className="padding-t-2 text-p">Message</label>
        <textarea
          className="contacts-textarea text-p"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
        <ButtonLight id="submit" label={"Let's talk!"} value="Let-s Talk!" />
      </form>
    </div>
  );
}
