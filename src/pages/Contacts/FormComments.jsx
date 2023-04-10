import { useState } from "react";
import React from "react";

function Comment() {
  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <label className="contacts-label">
        <p>Any comments or suggestions?</p>
        <textarea
          className="contacts-textarea"
          value={comment}
          onChange={handleChange}
          placeholder="Please enter your comment here"
          row="3"
          cols="40"
        />
      </label>
    </form>
  );
}

export default Comment;
