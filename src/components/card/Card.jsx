import React from "react";

function Card(props) {
  return (
    <div>
      <h3>
        <extra-strong>{props.name}</extra-strong>
      </h3>
      <p> {props.description}</p>
      <img alt=""></img>
    </div>
  );
}

export default Card;
