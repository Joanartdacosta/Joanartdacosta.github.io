import React from "react";
import AboutGallery from "./AboutGallery";
import Name from "./Name";
import Card from "../../components/card/Card";
import descriptions from "../../descriptions";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="margin">
      <motion.div
        animate={{ x: 10, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Name />
      </motion.div>

      <br />

      <h3>About me</h3>

      <motion.div
        animate={{ x: 10, scale: 1 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Card description={descriptions[0].description} />
      </motion.div>

      <h3>Free Time</h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Card description={descriptions[1].description} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 4 }}
      >
        <AboutGallery />
      </motion.div>
    </div>
  );
}

export default About;
