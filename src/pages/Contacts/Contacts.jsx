import React from "react";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import EmailJs from "../../components/contacts/EmailJs";

function Contacts() {
  return (
    <div>
      <h2 className="text-center m-b-2">Contact me</h2>

      <div className="contacts-introduction">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <p>
            I will be very happy to welcome you. For more information about me,
            or collaborations you can contact me using the form below, my
            socials or writing directly to the email: jrtdacosta@gmail.com.
          </p>
        </motion.div>
      </div>

      <div className="contacts-form">
        <EmailJs />
      </div>
    </div>
  );
}

export default Contacts;
