import React from "react";
import Card from "../../components/card/Card";
import descriptions from "./VolunteerDescriptions";
import VolunteerSlides from "./VolunteerSlides";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";

function Volunteer() {
  return (
    <div className="margin">
      <h2>Volunteering</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: TWO_SECONDS }}
      >
        <div className="description-font">
          <Card description={descriptions[0].description} />
        </div>
      </motion.div>

      <br />

      <div className="volunteer-gallery">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <VolunteerSlides />
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            {" "}
            <Card description={descriptions[0].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={descriptions[1].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={descriptions[1].description} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={descriptions[2].description} />
          </div>
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={descriptions[3].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={descriptions[3].description} />
          </div>
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={descriptions[4].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={descriptions[4].description} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;
