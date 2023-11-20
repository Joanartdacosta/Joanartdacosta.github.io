import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FOUR_SECONDS } from "../../../constants";

function Title() {
  return (
    <div className="title ">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I am Joana, ")
            .typeString("a passionate <strong>Web-Developer</strong>.")
            .start();
        }}
      />

      {/* <motion.div
        animate={{ x: 2, scale: 1 }}
        initial={{ x: -100 }}
        transition={{ ease: "easeOut", duration: FOUR_SECONDS }}
      >
        <p className="m-t-1 text-base">Come and have a look at my page</p>
      </motion.div> */}
    </div>
  );
}

export default Title;
