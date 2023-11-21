import React from "react";
import AboutGallery from "./AboutGallery";
import Card from "../card/Card";
import { motion } from "framer-motion";
import { TWO_SECONDS, ONE_SECOND } from "../../constants";
import ABOUT_DESCRIPTIONS from "./AboutDescriptions";

function About() {
  return (
    <div className="">
      <div className="text-center ">
        <h2 className="padding-2 text-yellow">About me</h2>

        <motion.div
          animate={{ x: 2, scale: 1 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: ONE_SECOND }}
        >
          <div className="description-font m-b-5 padding-2 text-white">
            <Card description={ABOUT_DESCRIPTIONS[0].description} />
            <div className="padding-2 description-font">
              <Card description={ABOUT_DESCRIPTIONS[1].description} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
