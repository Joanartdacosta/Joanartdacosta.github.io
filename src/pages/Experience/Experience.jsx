import ExperienceJobs from "./ExperienceJobs";
import React from "react";
import descriptions from "./arrays/ExperienceDescriptions";
import Card from "../../components/card/Card";
import "./experience.css";
import { motion } from "framer-motion";
import ExperienceGallery from "./ExperienceGallery";
import ExperienceCodingSkills from "./ExperienceCodingSkills";

function Experience() {
  return (
    <>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h2>Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <Card description={descriptions[0].description} />
            <Card description={descriptions[1].description} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <Card description={descriptions[2].description} />
          </p>
        </motion.div>

        <br />
        <ExperienceGallery />
        <br />

        <motion.div
          animate={{ x: 10, scale: 1 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <ExperienceCodingSkills />
        </motion.div>

        <hr />

        <h2>My previous professional positions:</h2>
        <ExperienceJobs />
      </div>
    </>
  );
}

export default Experience;
