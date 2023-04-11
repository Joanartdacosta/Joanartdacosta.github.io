import React from "react";
import Card from "../../components/card/Card";
import descriptions from "./VolunteerDescriptions";
import VolunteerSlides from "./VolunteerSlides";
import { motion } from "framer-motion";

function Volunteer() {
  return (
    <div className="margin">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h2>Volunteering</h2>
      </motion.div>
      <div className="volunteer-gallery">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <VolunteerSlides />
        </motion.div>
      </div>
      <hr />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 4 }}
      >
        <Card description={descriptions[0].description}></Card>
      </motion.div>

      <hr />

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[0].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[1].name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[1].description} />
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[2].name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[2].description} />
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[3].name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Card description={descriptions[3].description} />
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;
