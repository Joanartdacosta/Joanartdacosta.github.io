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
        <h2>Volunteering</h2>
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

      <div className="volunteer-card">
        <p>
          <strong>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Card description={descriptions[5].name} />
            </motion.div>
          </strong>
        </p>
        <p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Card description={descriptions[5].description} />
          </motion.div>
        </p>
        <p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Card description={descriptions[6].description} />
          </motion.div>
        </p>
      </div>
      <hr />
      <div className="volunteer-card">
        <p>
          <strong>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Card description={descriptions[7].name} />
            </motion.div>
          </strong>
        </p>
        <p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Card description={descriptions[7].description} />
          </motion.div>
        </p>
      </div>
      <hr />
      <div className="volunteer-card">
        <p>
          <strong>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Card description={descriptions[8].name} />
            </motion.div>
          </strong>
        </p>
        <p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Card description={descriptions[8].description} />
          </motion.div>
        </p>
      </div>
    </div>
  );
}

export default Volunteer;
