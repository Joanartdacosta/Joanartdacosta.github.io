import React from "react";
import AboutGallery from "../../components/about/AboutGallery";
import Name from "../../components/about/Name";
import Card from "../../components/card/Card";
import descriptions from "../../components/about/AboutDescriptions";
import { motion } from "framer-motion";
import { ONE_SECOND, TWO_SECONDS } from "../../constants";

function About() {
  return (
    <div className="margin">
      <motion.div
        animate={{ x: 2, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <Name />
      </motion.div>

      <br />

      <h2>About me</h2>

      <motion.div
        animate={{ x: 2, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: ONE_SECOND }}
      >
        <div className="description-font">
          <Card description={descriptions[0].description} />
        </div>
      </motion.div>
      <br />
      <h2>Free Time</h2>

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
        <br />
        <AboutGallery />
      </motion.div>
    </div>
  );
}

export default About;
