import React from "react";
import { motion } from "framer-motion";
import Social from "../../components/social/Social";
import { Link } from "react-router-dom";

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
            I will be very happy to welcome you. <br />
            For more information or collaborations you can contact me: <br />
            Email: jrtdacosta@gmail.com. <br />
            Phone: +351 91 744 97 34
          </p>
        </motion.div>

        <Social />

        <Link to="/about">
          <img
            className="home-photo"
            src="../../images/general/JC.png"
            alt=""
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Contacts;
