import ExperienceJobs from "./ExperienceJobs";
import React from "react";
import ExperienceResponsibilities from "./ExperienceResponsibilities";
import descriptions from "./arrays/ExperienceDescriptions";
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

        <div className="experience-pharmacy">
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
          {/* <img
            className="pharmacy"
            src="../images/experience/pharmacy.gif"
            alt=""
          ></img> */}
        </div>

        <div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <p>
                <Card description={descriptions[2].description} />
              </p>
            </motion.div>
          </div>
        </div>
        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <ExperienceResponsibilities />
        </motion.div>

        <hr />
        <h2>My previous professional positions:</h2>

        <ExperienceJobs />
      </div>
    </>
  );
}

export default Experience;
