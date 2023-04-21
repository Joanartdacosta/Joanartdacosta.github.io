import ExperienceJobs from "./ExperienceJobs";
import React from "react";
import descriptions from "./arrays/ExperienceDescriptions";
import Card from "../../components/card/Card";
import "./experience.css";
import { motion } from "framer-motion";
import ExperienceGallery from "./ExperienceGallery";
import ExperienceCodingSkills from "./ExperienceCodingSkills";
import { TWO_SECONDS } from "../../constants";

function Experience() {
  return (
    <>
      <div className="margin">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2>Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <p>
            <Card description={descriptions[0].description} />
            <Card description={descriptions[1].description} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <p>
            <Card description={descriptions[2].description} />
          </p>
        </motion.div>

        <br />
        <ExperienceGallery />
        <br />
        <ExperienceCodingSkills />
        <hr />

        <h2>My previous professional positions:</h2>
        <ExperienceJobs />
      </div>
    </>
  );
}

export default Experience;
