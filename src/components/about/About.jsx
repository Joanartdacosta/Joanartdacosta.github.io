import React from "react";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import ABOUT_DESCRIPTIONS from "./about_descriptions";

export default function About() {
  return (
    <div className="text-center max-width-56 m-auto md-max-width xl-max-width line-height-2">
      <h2 className="text-yellow m-b-4 text-title">About me</h2>

      <div className="flex justify-center align-items-center max-width-56 m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          {ABOUT_DESCRIPTIONS.map((sentence) => {
            return (
              <div key={sentence.id} className="text-p text-white line-break-3">
                <p className="text-p">{sentence.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
