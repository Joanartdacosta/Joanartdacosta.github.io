import ExperienceJobs from "../../components/experience/jobs/ExperienceJobs";
import React from "react";
import Card from "../../components/card/Card";
import "./experience.css";
import { motion } from "framer-motion";
import ExperienceGallery from "../../components/experience/descriptions/ExperienceGallery";
import ExperienceCodingSkills from "../../components/experience/skills/ExperienceCodingSkills";
import { TWO_SECONDS } from "../../constants";
import EXPERIENCE_DESCRIPTIONS from "../../components/experience/descriptions/ExperienceDescriptions";

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
          <div className="description-font">
            <Card description={EXPERIENCE_DESCRIPTIONS[0].description} />
            <Card description={EXPERIENCE_DESCRIPTIONS[1].description} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={EXPERIENCE_DESCRIPTIONS[2].description} />
          </div>
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
