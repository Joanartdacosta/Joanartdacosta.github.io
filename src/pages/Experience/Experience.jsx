import ExperienceJobs from "../../components/experience/jobs/ExperienceJobs";
import React from "react";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import ExperienceGallery from "../../components/experience/descriptions/ExperienceGallery";
import ExperienceCodingSkills from "../../components/experience/skills/ExperienceCodingSkills";
import { TWO_SECONDS } from "../../constants";
import EXPERIENCE_DESCRIPTIONS from "../../components/experience/descriptions/ExperienceDescriptions";

function Experience() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2 className="m-b-2">Work Experience</h2>
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
          <div className="description-font m-b-5">
            <Card description={EXPERIENCE_DESCRIPTIONS[2].description} />
          </div>
        </motion.div>

        <ExperienceGallery />

        <ExperienceCodingSkills />
        <hr />

        <p className="description-font strong m-b-2">
          My previous professional positions:
        </p>
        <ExperienceJobs />
      </div>
    </>
  );
}

export default Experience;
