import Heading from "./Heading";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skill.css";
import VisibilitySensor from "react-visibility-sensor";

const programmingSkills = [
  {
    name: "React JS",
    percentage: "80",
  },
  {
    name: "JavaScript",
    percentage: "66",
  },
  {
    name: "Node JS",
    percentage: "40",
  },
  {
    name: "Bootstrap",
    percentage: "80",
  },
  {
    name: "HTML",
    percentage: "75",
  },
  {
    name: "CSS",
    percentage: "70",
  },
  {
    name: "Firebase",
    percentage: "50",
  },
  {
    name: "Wordpress",
    percentage: "60",
  },
];

const Skill = () => {
  return (
    <div>
      <Heading name="Programming Skills" />
      <div className="main">
        {programmingSkills.map((skill, ind) => {
          return (
            <div key={ind} className="skill">
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? skill.percentage : 0;
                  return (
                    <CircularProgressbar
                      className="circularProgressbar"
                      value={percentage}
                      text={`${percentage}%`}
                      strokeWidth={3}
                    />
                  );
                }}
              </VisibilitySensor>
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skill;
