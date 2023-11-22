import React from "react";
import CurrentDate from "./CurrentDate";
import Social from "../social/Social";

export default function Footer() {
  return (
    <div className="bg-yellow w-full">
      <div className="padding-2 flex flex-column justify-center align-items-center text-center">
        <Social />
        <CurrentDate />
      </div>
    </div>
  );
}
