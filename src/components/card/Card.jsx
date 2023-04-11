import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p> {props.description}</p>
      <img alt=""></img>
    </div>
  );
}

export default Card;
