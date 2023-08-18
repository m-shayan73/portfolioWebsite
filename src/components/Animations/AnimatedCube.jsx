import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faPython,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const AnimatedCube = () => {
  return (
    <>
      <motion.div className="cube spin-cube">
        <div className="cube-side front">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="cube-side back">
          <FontAwesomeIcon icon={faSquareJs} color="#EFD81D" />
        </div>
        <div className="cube-side right">
          <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" flip="vertical" />
        </div>
        <div className="cube-side left">
          <FontAwesomeIcon icon={faPython} color="#ffe56c" />
        </div>
        <div className="cube-side up">
          <FontAwesomeIcon icon={faBootstrap} color="#7a11f8" />
        </div>
        <div className="cube-side down">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedCube;
