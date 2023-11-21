import React from "react";

import {
  TWO_SECONDS,
  ONE_SECOND,
  FOUR_SECONDS,
  THREE_SECONDS,
  FIVE_SECONDS,
  SIX_SECONDS,
  SEVEN_SECONDS,
  EIGHT_SECONDS,
} from "../../constants";
import { motion } from "framer-motion";

import FigmaIcon from "./icons/FigmaIcon";
import GithubIcon from "./icons/GithubIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import JestIcon from "./icons/JestIcon";
import NextIcon from "./icons//NextIcon";
import ReactIcon from "./icons//ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import VercelIcon from "./icons/VercelIcon";

function Skills() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <h2 className="m-b-2 text-center">Skills</h2>
      </motion.div>

      <div className="skill-icons">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: ONE_SECOND }}
        >
          <ReactIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <JavascriptIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: THREE_SECONDS }}
        >
          <JestIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: FOUR_SECONDS }}
        >
          <GithubIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: FIVE_SECONDS }}
        >
          <TailwindIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: SIX_SECONDS }}
        >
          <FigmaIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: SEVEN_SECONDS }}
        >
          <NextIcon />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: EIGHT_SECONDS }}
        >
          <VercelIcon />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
