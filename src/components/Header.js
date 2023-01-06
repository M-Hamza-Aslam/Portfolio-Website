import classes from "./Header.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Portfolio</h1>
      <div className={classes.socialButtons}>
        <div>
          <a
            href="https://github.com/M-Hamza-Aslam"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hamza-1bb698213/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:hamza.prolink@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
        </div>
        <a href="../images/Resume-Muhammad-Hamza.pdf" download>
          Download CV
        </a>
      </div>
    </div>
  );
};
export default Header;
