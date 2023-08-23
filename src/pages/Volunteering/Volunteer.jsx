import React from "react";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import Carousel from "../../components/carousel/Carousel";
import VOLUNTEERS from "../../components/volunteering/volunteers";
import VOLUNTEERING_DESCRIPTIONS from "../../components/volunteering/VolunteerDescriptions";

function Volunteer() {
  const multipleCarouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="margin">
      <h2>Volunteering</h2>

      <Carousel slides={VOLUNTEERS} settings={multipleCarouselSettings} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: TWO_SECONDS }}
      >
        <div className="description-font carousel-padding">
          <Card description={VOLUNTEERING_DESCRIPTIONS[0].description} />
        </div>
      </motion.div>

      <br />

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            {" "}
            <Card description={VOLUNTEERING_DESCRIPTIONS[0].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={VOLUNTEERING_DESCRIPTIONS[1].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={VOLUNTEERING_DESCRIPTIONS[1].description} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={VOLUNTEERING_DESCRIPTIONS[2].description} />
          </div>
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={VOLUNTEERING_DESCRIPTIONS[3].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={VOLUNTEERING_DESCRIPTIONS[3].description} />
          </div>
        </motion.div>

        <hr />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font strong">
            <Card description={VOLUNTEERING_DESCRIPTIONS[4].name} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <div className="description-font">
            <Card description={VOLUNTEERING_DESCRIPTIONS[4].description} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;
