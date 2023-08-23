import React from "react";
import "../../pages/Error/error.css";

function Penguin() {
  return (
    <>
      <div class="penguin">
        <div class="penguin-head">
          <div class="face left"></div>
          <div class="face right"></div>
          <div class="chin"></div>
          <div class="eye left">
            <div class="eye-lid"></div>
          </div>
          <div class="eye right">
            <div class="eye-lid"></div>
          </div>
          <div class="blush left"></div>
          <div class="blush right"></div>
          <div class="beak top"></div>
          <div class="beak bottom"></div>
        </div>
        <div class="shirt"></div>
        <div class="penguin-body">
          <div class="arm left"></div>
          <div class="arm right"></div>
          <div class="foot left"></div>
          <div class="foot right"></div>
        </div>
      </div>
    </>
  );
}

export default Penguin;
