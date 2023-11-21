import { motion } from "framer-motion";
import { TWO_SECONDS } from "../../constants";
import EducationList from "./education/EducationList";

export default function Education() {
  return (
    <div>
      <div className="max-width m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h2 className="m-b-2 text-center">Education & Certifications</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <EducationList />
        </motion.div>
      </div>
    </div>
  );
}
