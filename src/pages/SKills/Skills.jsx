import React from "react";
import EducationList from "../../components/skills/education/EducationList";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import FigmaIcon from "../../components2/icons/FigmaIcon";
import GithubIcon from "../../components2/icons/GithubIcon";
import JavascriptIcon from "../../components2/icons/JavascriptIcon";
import JestIcon from "../../components2/icons/JestIcon";
import NextIcon from "../../components2/icons/NextIcon";
import ReactIcon from "../../components2/icons/ReactIcon";
import TailwindIcon from "../../components2/icons/TailwindIcon";
import VercelIcon from "../../components2/icons/VercelIcon";

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
        {/* <SkillsDescription /> */}
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
