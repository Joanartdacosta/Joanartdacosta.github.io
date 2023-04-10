import React from "react";
import Gender from "./Type-forms/FormRadio";
import Input from "./Type-forms/FormInput";
import Select from "./Type-forms/FormSelect";
import Comment from "./Type-forms/FormComments";
import Terms from "./Type-forms/FormTerms";

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
