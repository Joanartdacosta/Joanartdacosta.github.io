import React from "react";
import Gender from "./FormRadio";
import Input from "./FormInput";
import Select from "./FormSelect";
import Comment from "./FormComments";
import Terms from "./FormTerms";

function Form() {
  function handleClick() {
    alert(
      "Your message was sent to me :) I will response as soon as possible. Thank you so much"
    );
  }

  return (
    <>
      <div>
        <Input />
        <Gender />
        <Select />
        <Comment />
        <Terms />
        <a href="mailto:jrtdacosta@gmail.com">
          <button onCLick={handleClick}>Let's talk!</button>
        </a>
      </div>
    </>
  );
}

export default Form;
