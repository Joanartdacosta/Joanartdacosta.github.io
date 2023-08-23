import React from "react";
import SkillsDescription from "../../components/skills/SkillsDescription";
import EducationList from "../../components/skills/education/EducationList";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";

function Skills() {
  return (
    <>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2>Skills</h2>
        </motion.div>

        <SkillsDescription />
        <br />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2>Education & Certifications</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <EducationList />
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
