import Form from "./Form";
import Card from "../../components/card/Card";
import descriptions from "../../descriptions";
import React from "react";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="margin">
      <h3>Contacts</h3>

      <div className="contacts-introduction">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Card description={descriptions[9].description} />
        </motion.div>
      </div>

      <br />

      <div className="contacts-form">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
