import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoS from "../../assets/images/logo-s.png";

const navbar = () => {
  return (
    <>
      <nav>
        <Link className="nav-logo" to="/">
          <img id="nav-logo-s" src={LogoS} alt="logo" />
          <p className="logo-title">M.Shayan</p>
        </Link>

        <ul className="nav-links">
          <li className="nav-home">
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
          </li>
          <li className="nav-about">
            <NavLink exact="true" activeclassname="active" to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
          </li>
          <li className="nav-projects">
            <NavLink exact="true" activeclassname="active" to="/projects">
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
          </li>
          <li className="nav-contact">
            <NavLink exact="true" activeclassname="active" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </li>
        </ul>

        <ul className="nav-links nav-profiles">
          <li>
            <a href="https://www.linkedin.com/in/muhammad-shayan-806657238/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a href="https://github.com/m-shayan73">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
