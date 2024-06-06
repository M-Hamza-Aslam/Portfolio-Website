import classes from "./DisplaySection.module.css";
import Typewriter from "typewriter-effect";

const myImg = require("../images/me.jpeg");

const DisplaySection = () => {
  return (
    <div className={classes.DisplaySection}>
      <div className={classes.leftSection}>
        <p className={classes.p1}>I'M</p>
        <p className={classes.p2}>
          MUHAMMAD <br /> HAMZA
        </p>
        <div className={classes.p3}>
          <span>A PASSIONATE</span>
          <Typewriter
            options={{
              strings: [" MERN STACK DEVELOPER", " REACT.JS DEVELOPER"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={classes.rightSection}>
        <img src={myImg} alt="Personal" />
      </div>
    </div>
  );
};
export default DisplaySection;
