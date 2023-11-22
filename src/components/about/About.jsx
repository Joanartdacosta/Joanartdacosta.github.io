import React from "react";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import ABOUT_DESCRIPTIONS from "./AboutDescriptions";

function About() {
  return (
    <div className="text-center max-width m-auto md-max-width xl-max-width line-height-2">
      <h2 className="text-yellow m-b-2">About me</h2>

      <div className="flex justify-center align-items-center max-width m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div>
            <div className="text-p text-white line-break-3">
              <Card description={ABOUT_DESCRIPTIONS[0].description} />
            </div>
            <div className="text-p  text-white line-break-3">
              <Card description={ABOUT_DESCRIPTIONS[1].description} />
            </div>
            <div className="text-p  text-white">
              <Card description={ABOUT_DESCRIPTIONS[2].description} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
