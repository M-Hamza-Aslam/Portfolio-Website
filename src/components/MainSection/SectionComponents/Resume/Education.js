import classes from "./Education.module.css";
import Heading from "./Heading";
const educationInfo = [
  {
    degree: "Bechelor of Computer Science",
    institute: "NED University of Engineering & Technology",
    duration: "2020 - 2024",
    detail:
      "Started Bachelor in Computer Science from NED University in 2020 and currently in fifth semester (3rd year) with CGPA 3.8/4.0",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institute: "DJ Sindh GOVT. Science College",
    duration: "2018 – 2020",
    detail:
      "Completed Intermediate in Engineering from a well known historical DJ Sindh GOVT. Science College in the year 2020 with A-1 grade (secured 84%)",
  },
  {
    degree: "Matriculation (Computer Science) ",
    institute: "Jamia-Tul-Ansar",
    duration: "2013 - 2018",
    detail:
      "Achieved degree of Matriculation from a good school Jamia-Tul-Ansar in the year 2018 with A-1 grade (Secured 84%)",
  },
];

const Education = () => {
  return (
    <div>
      <Heading name="Education" />
      {educationInfo.map((edu, ind) => {
        return (
          <div key={ind} className={classes.education}>
            <div className={classes.institute}>
              <div className={classes.degree}>
                <h5>{edu.degree}</h5>
                <h6>{edu.institute}</h6>
              </div>
              <div className={classes.duration}>
                <p>{edu.duration}</p>
              </div>
            </div>
            <p>{edu.detail}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Education;
