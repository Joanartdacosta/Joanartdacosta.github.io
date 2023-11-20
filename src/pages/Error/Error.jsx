import Penguin from "../../components/error/Penguin";
import React from "react";
import "../../styles/index.css";

function Error() {
  return (
    <>
      <div>
        <h3>404 - ERROR PAGE </h3>
        <p>
          I am sorry but I have bad news for you... I can't find the amazing
          page you are looking for.
        </p>
        <Penguin />
      </div>
    </>
  );
}

export default Error;
