import React from "react";
import Title from "./Title";
import "../Home/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TWO_SECONDS } from "../../constants";
import NavBarHome from "../../components/navbar/NavbarHome";

function Home() {
  return (
    <>
      <NavBarHome />
      <div>
        <motion.div
          animate={{ x: 10, scale: 1 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <h1 className="home-welcome">WELCOME</h1>
        </motion.div>

        <Title />

        <motion.div
          animate={{ x: 10, scale: 1 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: TWO_SECONDS }}
        >
          <Link to="/about">
            <img
              className="home-photo"
              src="../../images/general/JC.png"
              alt=""
            ></img>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
