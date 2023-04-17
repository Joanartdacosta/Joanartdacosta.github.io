import React from "react";
import { motion } from "framer-motion";
import Social from "../../components/social/Social";

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
            services or collaborations you can contact me: <br />
            Email: jrtdacosta@gmail.com. <br />
            Phone: +351 91 744 97 34
          </p>
        </motion.div>

        <Social />
      </div>
    </div>
  );
}

export default Contacts;
