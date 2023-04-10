import React from "react";

function Card(props) {
  return (
    <div>
      {props.name}
      {props.description}
    </div>
  );
}

export default Card;
