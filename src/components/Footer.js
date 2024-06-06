import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h2>Designed by Muhammad Hamza</h2>
      <div className={classes.social}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/muhammad-hamza-ned/"
        >
          <h2>LinkedIn</h2>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/M-Hamza-Aslam"
        >
          <h2>GitHub</h2>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:hamza.prolink@gmail.com"
        >
          <h2>Mail</h2>
        </a>
      </div>
    </div>
  );
};
export default Footer;
