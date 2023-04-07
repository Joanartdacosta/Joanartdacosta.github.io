import jobs from "./jobs";
import React from "react";
import CardJob from "./CardJob";
import { motion } from "framer-motion";

function createCard(job) {
  return (
    <CardJob
      key={job.id}
      imgURL={job.imgURL}
      position={job.position}
      name={job.name}
      time={job.time}
    />
  );
}

function ExperienceJob() {
  return (
    <div>
      <div>
        <motion.div
          animate={{ x: "2%" }}
          initial={{ x: "-10%" }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          {jobs.map(createCard)}
        </motion.div>
      </div>
    </div>
  );
}

export default ExperienceJob;
