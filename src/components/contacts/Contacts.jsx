import React from "react";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import EmailJs from "./EmailJs";

function Contacts() {
  return (
    <div className="max-width m-auto md-max-width flex">
      {/* texto e formulario */}
      <div className="">
        {/* texto */}
        <div className="">
          <h2 className="text-center text-yellow m-b-2">Contact me</h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: TWO_SECONDS }}
          >
            <p className="text-white text-center">
              I will be very happy to welcome you. For more information about
              me, or collaborations you can contact me using the form below, my
              socials or writing directly to the email: jrtdacosta@gmail.com.
            </p>
          </motion.div>
        </div>

        {/* formulario */}

        <div className="m-auto padding-t-2">
          <EmailJs />
        </div>
      </div>

      <div>
        <img
          className="contacts-image"
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contacts;
