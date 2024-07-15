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

export default function Skills() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <h2 className="m-b-4 text-center text-title">Skills</h2>
      </motion.div>

      <div className="skill-icons text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: ONE_SECOND }}
        >
          <ReactIcon />
          <p>React</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: SEVEN_SECONDS }}
        >
          <NextIcon />
          <p>NextJs</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: EIGHT_SECONDS }}
        >
          <VercelIcon />
          <p>Vercel</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <JavascriptIcon />
          <p>Javascript</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: FIVE_SECONDS }}
        >
          <TailwindIcon />
          <p>Tailwind</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: SIX_SECONDS }}
        >
          <FigmaIcon />
          <p>Figma</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: THREE_SECONDS }}
        >
          <JestIcon />
          <p>Jest</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: FOUR_SECONDS }}
        >
          <GithubIcon />
          <p>Github</p>
        </motion.div>
      </div>
    </div>
  );
}
