import LinearProgress from "@mui/material/LinearProgress";
import Heading from "./Heading";
import VisibilitySensor from "react-visibility-sensor";
import classes from "./Tool.module.css";

const tools = [
  { name: "Redux", percentage: 70 },
  {
    name: "npm",
    percentage: 60,
  },
  {
    name: "Git",
    percentage: 60,
  },
  {
    name: "VS Code",
    percentage: 80,
  },
];
const Tool = () => {
  return (
    <div>
      <Heading name="Tools" />
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
  );
};
export default Tool;
