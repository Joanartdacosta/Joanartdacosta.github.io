import ExperienceJobs from "./ExperienceJobs";
import React from "react";
import ExperienceResponsibilities from "./ExperienceResponsibilities";
import descriptions from "../../descriptions";
import Card from "../../components/card/Card";
import "./experience.css";
import { motion } from "framer-motion";

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

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Card description={descriptions[2].description} />
            <Card description={descriptions[3].description} />
          </motion.div>
        </div>

        <div classNames="experience-images">
          <img
            className="pharmacy"
            src="../images/experience/pharmacy.gif"
            alt=""
          ></img>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Card description={descriptions[4].description} />
            </motion.div>
          </div>
        </div>
        <hr />

        <div className="experience-responsibilities">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <ExperienceResponsibilities />
          </motion.div>
        </div>

        <hr />
        <p>My previous professional positions:</p>

        <div className="experience-jobs">
          <ExperienceJobs />
        </div>
      </div>
    </>
  );
}

export default Experience;
