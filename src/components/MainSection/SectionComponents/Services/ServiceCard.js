import classes from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  return (
    <div className={classes.card}>
      {props.service.icon}
      <h2>{props.service.name}</h2>
      <p>{props.service.detail}</p>
    </div>
  );
};
export default ServiceCard;
