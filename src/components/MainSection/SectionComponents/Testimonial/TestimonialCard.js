import classes from "./TestimonialCard.module.css";
import Avatar from "@mui/material/Avatar";
import { IoMdQuote } from "react-icons/io";

const TestimonialCard = (props) => {
  return (
    <div className={classes.slide}>
      {props.cards.map((card, ind) => {
        return (
          <div key={ind} className={classes.card}>
            <p>{card.msg}</p>
            <div className={classes.lowerDiv}>
              <Avatar className={classes.avatar} src={card.img} alt="me" />
              <div>
                <h2>{card.name}</h2>
                <h3>{card.position}</h3>
              </div>
              <IoMdQuote />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TestimonialCard;
