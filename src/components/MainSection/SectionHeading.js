import classes from "./SectionHeading.module.css";
const SectionHeading = (props) => {
  return (
    <div className={classes.main}>
      <h6>{props.name}</h6>
      <h2>{props.detail}</h2>
    </div>
  );
};
export default SectionHeading;
