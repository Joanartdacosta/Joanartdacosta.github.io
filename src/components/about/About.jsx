import React from "react";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import ABOUT_DESCRIPTIONS from "./AboutDescriptions";

function About() {
  return (
    <div className="text-center max-width m-auto">
      <h2 className="text-yellow">About me</h2>

      <div className="flex justify-center align-items-center max-width m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font m-b-5">
            <div className="description-font text-white padding-b-4">
              <Card description={ABOUT_DESCRIPTIONS[0].description} />
            </div>

            <div className="description-font text-white">
              <Card description={ABOUT_DESCRIPTIONS[1].description} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
