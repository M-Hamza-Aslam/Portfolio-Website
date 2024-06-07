import classes from "./Certificate.module.css";
import Heading from "./Heading";

const certificates = [
  {
    name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    instructor: "Maximilian Schwarzmüller on Udemy",
    date: "03/2023",
  },
  {
    name: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller on Udemy",
    date: "07/2022",
  },
  {
    name: "Introduction to HTML5",
    instructor: "University of Michigan on Coursera",
    date: "09/2021",
  },
  {
    name: "Introduction to CSS3",
    instructor: "University of Michigan on Coursera ",
    date: "10/2021",
  },
  {
    name: "WordPress for Absolute Beginners",
    instructor: "Creative Online School on Udemy ",
    date: "10/2021",
  },
  {
    name: "Interactivity with JavaScript",
    instructor: "University of Michigan on Coursera ",
    date: "12/2021",
  },
  {
    name: "Introduction to AI with Python",
    instructor: "NCAI - NEDUET, Smart City Lab",
    date: "04/2021",
  },
];

const Certificate = () => {
  return (
    <div>
      <Heading name="Certificate" />
      {certificates.map((certi, ind) => {
        return (
          <div key={ind} className={classes.certificate}>
            <div className={classes.info}>
              <h5>{certi.name}</h5>
              <h6>{certi.instructor}</h6>
            </div>
            <div className={classes.date}>
              <p>{certi.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Certificate;
