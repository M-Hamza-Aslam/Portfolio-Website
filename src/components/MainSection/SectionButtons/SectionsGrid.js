import SectionButton from "./SectionButton";
import classes from "./SectionGrid.module.css";

import {
  MdContactPage,
  MdTextSnippet,
  MdWork,
  MdSettings,
  MdComment,
  MdPostAdd,
  MdMail,
} from "react-icons/md";
// import { useState } from "react";

const sectionIcons = [
  { name: "About Me", icon: <MdTextSnippet /> },
  { name: "Resume", icon: <MdContactPage /> },
  { name: "Portfolio", icon: <MdWork /> },
  { name: "Services", icon: <MdSettings /> },
  { name: "Testimonial", icon: <MdComment /> },
  { name: "Blog", icon: <MdPostAdd /> },
  { name: "Contact", icon: <MdMail /> },
];

const SectionsGrid = (props) => {
  return (
    <div className={classes.secionGrid}>
      {sectionIcons.map((sec, ind) => {
        return (
          <SectionButton
            key={ind}
            info={sec}
            onSelection={props.onSelection}
            activeSection={props.activeSection}
          />
        );
      })}
    </div>
  );
};
export default SectionsGrid;
