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
          <h3>Work Experience</h3>
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

        <div>
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
        <h2>My previous professional positions:</h2>

        <div className="experience-jobs">
          <ExperienceJobs />
        </div>
      </div>
    </>
  );
}

export default Experience;
