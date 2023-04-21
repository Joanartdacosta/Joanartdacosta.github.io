import React from "react";
import AboutGallery from "./AboutGallery";
import Name from "./Name";
import Card from "../../components/card/Card";
import descriptions from "./AboutDescriptions";
import { motion } from "framer-motion";
import { ONE_SECOND, TWO_SECONDS } from "../../constants";

function About() {
  return (
    <div className="margin">
      <motion.div
        animate={{ x: 10, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <Name />
      </motion.div>

      <br />

      <h2>About me</h2>

      <motion.div
        animate={{ x: 10, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <p>
          <Card description={descriptions[0].description} />
        </p>
      </motion.div>

      <h2>Free Time</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: TWO_SECONDS }}
      >
        <p>
          <Card description={descriptions[1].description} />{" "}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: TWO_SECONDS }}
      >
        <AboutGallery />
      </motion.div>
    </div>
  );
}

export default About;
