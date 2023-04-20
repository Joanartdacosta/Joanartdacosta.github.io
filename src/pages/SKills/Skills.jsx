import React from "react";
import SkillsDescription from "./SkillsDescription";
import EducationList from "./EducationList";
import { motion } from "framer-motion";
import { two_seconds } from "../../constants";

function Skills() {
  return (
    <>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: two_seconds }}
        >
          <h2>Skills</h2>
        </motion.div>

        <SkillsDescription />
      </div>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: two_seconds }}
        >
          <h2>Education & Certifications</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: two_seconds }}
        >
          <EducationList />
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
