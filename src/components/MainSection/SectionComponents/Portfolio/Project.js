import classes from "./Project.module.css";
import { MdVisibility } from "react-icons/md";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useState } from "react";
import { createRef } from "react";

const fk = require("../../../../images/fk.jpg");
const foody = require("../../../../images/foody.jpg");
const samaanlo = require("../../../../images/samaanlo.jpg");
const clickers = require("../../../../images/clickers.jpg");

const projects = [
  {
    name: "FoodKing",
    category: "React JS",
    img: fk,
    link: "https://fk-nu.vercel.app/",
    nodeRef: createRef(null),
  },
  {
    name: "Foody-Recipe Finder",
    category: "React JS",
    img: foody,
    link: "https://foodyrecipefinder.vercel.app/",
    nodeRef: createRef(null),
  },
  {
    name: "Samaanlo.pk",
    category: "Wordpress",
    img: samaanlo,
    link: "https://samaanlo.pk/",
    nodeRef: createRef(null),
  },
  {
    name: "Clickers",
    category: "HTML",
    img: clickers,
    link: "https://clickers.surge.sh/",
    nodeRef: createRef(null),
  },
];

const Project = (props) => {
  const [projectsToShow, setProjectToShow] = useState([]);
  useEffect(() => {
    let tempProjectsToShow = [];
    if (props.category === "All") {
      tempProjectsToShow = projects;
    } else {
      projects.forEach((project, ind) => {
        if (project.category === props.category) {
          tempProjectsToShow.push(project);
        }
      });
    }
    setProjectToShow(tempProjectsToShow);
  }, [props.category]);

  return (
    <TransitionGroup className={classes.main}>
      {projectsToShow.map((project, ind) => {
        return (
          <CSSTransition
            key={ind}
            nodeRef={project.nodeRef}
            timeout={300}
            classNames={{
              enter: classes.projectEnter,
              enterActive: classes.projectEnterActive,
              exit: classes.projectExit,
            }}
          >
            <div ref={project.nodeRef} className={classes.project}>
              <div className={classes.projectImg}>
                <img src={project.img} alt="Project1" />
              </div>
              <div className={classes.projectText}>
                <div>
                  <h2>{project.name}</h2>
                  <h3>{project.category}</h3>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <MdVisibility />
                </a>
              </div>
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
export default Project;
