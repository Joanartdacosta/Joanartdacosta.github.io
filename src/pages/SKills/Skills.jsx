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
          <h3>Skills</h3>
        </motion.div>
        <motion.div
          animate={{ x: "2%" }}
          initial={{ x: "-10%" }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          whileHover={{ scale: 1.2 }}
        >
          <SkillsDescription />
        </motion.div>
      </div>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h3>Education & Certifications</h3>
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
