import classes from "./Heading.module.css";
import { BsRecordCircle } from "react-icons/bs";

const Heading = (props) => {
  return (
    <div className={classes.heading}>
      <BsRecordCircle />
      <h3>{props.name}</h3>
    </div>
  );
};
export default Heading;
