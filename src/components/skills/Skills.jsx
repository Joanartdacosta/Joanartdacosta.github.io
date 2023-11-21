import React from "react";
import EducationList from "./education/EducationList";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
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
      <div className="m-b-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2 className="m-b-2 text-center">Skills</h2>
        </motion.div>

        <div className="skill-icons">
          <ReactIcon />
          <JavascriptIcon />
          <JestIcon />
          <GithubIcon />
          <TailwindIcon />
          <FigmaIcon />
          <NextIcon />
          <VercelIcon />
        </div>
      </div>

      <div className="m-b-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2 className="m-b-2 text-center">Education & Certifications</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <EducationList />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
