import LinearProgress from "@mui/material/LinearProgress";
import Heading from "./Heading";
import VisibilitySensor from "react-visibility-sensor";
import classes from "./Tool.module.css";

const tools = [
  { name: "Mongoose", percentage: 75 },
  { name: "Sequelize", percentage: 75 },
  { name: "Express", percentage: 75 },
  { name: "Axios", percentage: 75 },
  { name: "Redux Toolkit", percentage: 70 },
  { name: "Figma", percentage: 50 },
  {
    name: "npm",
    percentage: 60,
  },
  {
    name: "Git",
    percentage: 60,
  },
];
const Tool = () => {
  return (
    <div>
      <Heading name="Tools" />
      <div className={classes.tools}>
        {tools.map((tool, ind) => {
          return (
            <VisibilitySensor key={ind}>
              {({ isVisible }) => {
                const percentage = isVisible ? tool.percentage : 0;
                return (
                  <div className={classes.tool}>
                    <h3>{tool.name}</h3>
                    <LinearProgress
                      className={classes.progressBar}
                      variant="determinate"
                      value={percentage}
                    />
                  </div>
                );
              }}
            </VisibilitySensor>
          );
        })}
      </div>
    </div>
  );
};
export default Tool;
