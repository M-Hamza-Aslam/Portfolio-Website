import classes from "./AboutMe.module.css";

const myImg = require("../../../images/me2.jpg");
const resume = require("../../../images/Resume-Muhammad-Hamza.pdf");


const AboutMe = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.innerLeft}>
        <img src={myImg} alt="myself" />
        <div className={classes.basicInfo}>
          <h6>Name</h6>
          <p>Muhammad Hamza</p>
          <hr />
          <h6>Birthday</h6>
          <p>July 02, 2000</p>
          <hr />
          <h6>Mail</h6>
          <p>hamza.prolink@gmail.com</p>
          <hr />
          <h6>Phone</h6>
          <p>+92 313 0260405</p>
          <hr />
          <h6>Address</h6>
          <p>Jung Press, Karachi</p>
          <hr />
          <h6>Nationality</h6>
          <p>Pakistani</p>
        </div>
      </div>
      <div className={classes.innerRight}>
        <h2>About Me</h2>
        <h3>React.js Developer | Front-End Developer</h3>
        <h4>A passionate Web Developer based in Karachi, Pakistan</h4>
        <p>
          Hi! My name is Muhammad Hamza. I am a self-motivated and hardworking
          computer science undergraduate student with broad skills and
          experience in Front-end web development. I am a fast learner and
          passionate about learning new technologies in front-end and back-end
          web development.
        </p>
        <a href={resume} download>
          Download CV
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
