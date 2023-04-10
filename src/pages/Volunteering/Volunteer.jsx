import React from "react";
import Card from "../../components/card/Card";
import descriptions from "../../descriptions";
import VolunteerSlides from "./VolunteerSlides";
import { motion } from "framer-motion";

function Volunteer() {
  return (
    <div className="margin">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h3>Volunteering</h3>
      </motion.div>
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
          Travelling, discovering new cultures and coming into contact with
          different realities allows me to grow immensely as a person. One of
          the main challenges of my life was the chance to go on a humanitarian
          mission in San Tome in Prince (in a rural village called Bombom),
          where I led a team to work in a project in severe conditions. During
          these missions, a reality adjustment was necessary. Abilities such as
          cooperation, resilience, working under pressure and a “make things
          happen” mentality, even with a lack of resources, were precious. These
          experiences played an essential role in my professional skills,
          increasing my sense of empathy, resilience and my capability to adapt
          in extreme circumstances.
        </p>
      </motion.div>

      <hr />

      <div className="volunteer-card">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[5].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            {" "}
            <Card description={descriptions[5].description} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            {" "}
            <Card description={descriptions[6].description} />
          </p>
        </motion.div>
      </div>
      <hr />
      <div className="volunteer-card">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[7].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            {" "}
            <Card description={descriptions[7].description} />
          </p>
        </motion.div>
      </div>
      <hr />
      <div className="volunteer-card">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            <strong>
              <Card description={descriptions[8].name} />
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <p>
            {" "}
            <Card description={descriptions[8].description} />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;
