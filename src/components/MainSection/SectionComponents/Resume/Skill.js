import Heading from "./Heading";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skill.css";
import VisibilitySensor from "react-visibility-sensor";

const programmingSkills = [
  {
    name: "HTML",
    percentage: "85",
  },
  {
    name: "CSS",
    percentage: "80",
  },
  {
    name: "JavaScript",
    percentage: "75",
  },
  {
    name: "React JS",
    percentage: "80",
  },
  {
    name: "Next JS",
    percentage: "70",
  },
  {
    name: "Node JS",
    percentage: "70",
  },
  {
    name: "Bootstrap",
    percentage: "80",
  },
  {
    name: "Tailwind CSS",
    percentage: "80",
  },
  {
    name: "Material UI",
    percentage: "70",
  },
  {
    name: "Firebase",
    percentage: "65",
  },
  {
    name: "MongoDB",
    percentage: "70",
  },
  {
    name: "SQL",
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
