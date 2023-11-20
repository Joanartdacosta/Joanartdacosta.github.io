import React from "react";
import AboutGallery from "../../components/about/AboutGallery";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { TWO_SECONDS, ONE_SECOND } from "../../constants";
import ABOUT_DESCRIPTIONS from "../../components/about/AboutDescriptions";

function About() {
  return (
    <div className="m-t-5">
      <div className="text-center ">
        <h2 className="padding-2">About me</h2>

        <motion.div
          animate={{ x: 2, scale: 1 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: ONE_SECOND }}
        >
          <div className="description-font m-b-5 padding-2">
            <Card description={ABOUT_DESCRIPTIONS[0].description} />
            <div className="padding-2">
              <Card description={ABOUT_DESCRIPTIONS[1].description} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* <AboutGallery /> */}
    </div>
  );
}

export default About;
