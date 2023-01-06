import classes from "./SectionButton.module.css";
const SectionButton = (props) => {
  const ButtonClasses =
    props.info.name === props.activeSection
      ? classes.sectionButton + " " + classes.ActiveButton
      : classes.sectionButton;

  const selectionHandler = () => {
    props.onSelection(props.info.name);
  };
  return (
    <button className={ButtonClasses} onClick={selectionHandler}>
      {props.info.icon}
      <p>{props.info.name}</p>
    </button>
  );
};
export default SectionButton;
