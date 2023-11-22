import Penguin from "../../components/penguin/Penguin";
import React from "react";
import "../../styles/index.css";

export default function Error() {
  return (
    <div className="flex flex-column bg-black justify-center align-items-center padding-tb-8">
      <div className=" max-width-56 md-max-width xl-max-width  text-center">
        <h2 className="text-yellow text-center text-title">
          404 - ERROR PAGE{" "}
        </h2>
        <p className="text-white text-p">
          I am sorry but I have bad news for you... I can't find the amazing
          page you are looking for.
        </p>
      </div>
      <div>
        <Penguin />
      </div>
    </div>
  );
}
