import React from "react";
import SkillsDescription from "./SkillsDescription";
import EducationList from "./EducationList";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <h2>Skills</h2>
        </motion.div>
        <SkillsDescription />
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h2>Education & Certifications</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <EducationList />
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
