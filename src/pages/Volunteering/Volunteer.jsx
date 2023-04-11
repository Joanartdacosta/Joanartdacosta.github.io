import React from "react";
import Card from "../../components/card/Card";
import descriptions from "./VolunteerDescriptions";
import VolunteerSlides from "./VolunteerSlides";
import { motion } from "framer-motion";

function Volunteer() {
  return (
    <div className="margin">
      <h2>Volunteering</h2>

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
        <p>
          <Card description={descriptions[0].description} />
        </p>
      </motion.div>

      <hr />

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h3>
            {" "}
            <Card description={descriptions[0].name} />
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[1].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
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

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[3].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <Card description={descriptions[3].description} />
          </p>
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[4].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <Card description={descriptions[4].description} />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;
