import React from "react";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import EmailJs from "./Form/EmailJs";

export default function Contacts() {
  return (
    <div className="m-auto max-width-40 md-max-width xl-max-width line-height-2">
      <div>
        <h2 className="text-center text-yellow m-b-4 line-break-3 text-title">
          Let's talk!
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <p className="text-white text-center text-p">
            I will be very happy to welcome you. For more information about me,
            or collaborations you can contact me using the form below, my
            socials or writing directly to the email: jrtdacosta@gmail.com.
          </p>
        </motion.div>
      </div>

      <div className="padding-t-2">
        <EmailJs />
      </div>
    </div>
  );
}
