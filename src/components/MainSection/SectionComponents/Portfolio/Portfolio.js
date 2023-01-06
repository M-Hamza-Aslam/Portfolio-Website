import { useState } from "react";
import classes from "./Portfolio.module.css";
import Project from "./Project";
import SectionHeading from "../../SectionHeading";

const categories = ["All", "React JS", "HTML", "Wordpress"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <SectionHeading
        name="Portfolio"
        detail="All the projects that I made uptil now"
      />

      <div className={classes.main}>
        <ul className={classes.categories}>
          {categories.map((category, ind) => {
            const categoryBtnClasses =
              activeCategory === category
                ? classes.categoryBtn + " " + classes.activeBtn
                : classes.categoryBtn;
            return (
              <li key={ind}>
                <button
                  className={categoryBtnClasses}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Project category={activeCategory} />
      </div>
    </>
  );
};
export default Portfolio;
