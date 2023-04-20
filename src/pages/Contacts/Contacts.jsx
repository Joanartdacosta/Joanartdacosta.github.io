import Form from "./Form";
import React from "react";
import { motion } from "framer-motion";
import { two_seconds } from "../../constants";

function Contacts() {
  return (
    <div className="margin">
      <h2>Contacts</h2>

      <div className="contacts-introduction">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: two_seconds }}
        >
          <p>
            I will be very happy to welcome you. For more information about me,
            services or collaborations you can contact me using the form below,
            my socials or writing directly to the email: jrtdacosta@gmail.com.
          </p>
        </motion.div>
      </div>

      <br />

      <div className="contacts-form">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: two_seconds }}
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
