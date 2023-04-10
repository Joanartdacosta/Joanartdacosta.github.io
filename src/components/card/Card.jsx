import React from "react";

function Card(props) {
  return (
    <div>
      <p>
        <extra-strong>{props.name}</extra-strong>
      </p>
      <p>{props.description}</p>
      <img alt=""></img>
    </div>
  );
}

export default Card;
