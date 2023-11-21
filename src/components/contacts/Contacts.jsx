import React from "react";
import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import EmailJs from "./EmailJs";

function Contacts() {
  return (
    <div className="flex justify-center align-items-center bg-color-1 h-screen w-screen">
      <div>
        <div className="padding-r-16 padding-l-16">
          <h2 className="text-center text-yellow m-b-2">Contact me</h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: TWO_SECONDS }}
          >
            <p className="text-white m-auto">
              I will be very happy to welcome you. For more information about
              me, or collaborations you can contact me using the form below, my
              socials or writing directly to the email: jrtdacosta@gmail.com.
            </p>
          </motion.div>
        </div>

        <div className="m-auto text-white padding-r-16 padding-l-16 padding-t-2">
          <EmailJs />
          {/* </div> */}
        </div>
      </div>

      <div>
        <img
          className="contacts-image m-auto"
          src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contacts;
