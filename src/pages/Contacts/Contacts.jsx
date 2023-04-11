import Form from "./Form";
import React from "react";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="margin">
      <h2>Contacts</h2>

      <div className="contacts-introduction">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
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
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
