import React from "react";

function Card(props) {
  return (
    <>
      {props.name}
      {props.description}
    </>
  );
}

export default Card;
