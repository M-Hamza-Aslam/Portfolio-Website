import classes from "./Resume.module.css";
import Education from "./Education";
import Certificate from "./Certificate";
import Skill from "./Skill";
import Tool from "./Tool";
import SectionHeading from "../../SectionHeading";

const Resume = () => {
  return (
    <>
      <SectionHeading
        name="Resume"
        detail="Combination of Skill, Education & Experiences"
      />
      <div className={classes.outer}>
        <div className={classes.innerLeft}>
          <Education />
          <Certificate />
        </div>
        <div className={classes.innerRight}>
          <Skill />
          <Tool />
        </div>
      </div>
    </>
  );
};
export default Resume;
