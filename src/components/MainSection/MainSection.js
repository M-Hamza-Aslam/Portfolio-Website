import AboutMe from "./SectionComponents/AboutMe";
import Blog from "./SectionComponents/Blog/Blog";
import Contact from "./SectionComponents/Contact/Contact";
import Portfolio from "./SectionComponents/Portfolio/Portfolio";
import Resume from "./SectionComponents/Resume/Resume";
import Services from "./SectionComponents/Services/Services";
import Testimonial from "./SectionComponents/Testimonial/Testimonial";

import classes from "./MainSection.module.css";

import SectionsGrid from "./SectionButtons/SectionsGrid";
import { useRef, useState } from "react";

const sections = {
  "About Me": <AboutMe />,
  Resume: <Resume />,
  Portfolio: <Portfolio />,
  Services: <Services />,
  Testimonial: <Testimonial />,
  Blog: <Blog />,
  Contact: <Contact />,
};

const MainSection = (props) => {
  const [activeSection, setActiveSection] = useState("About Me");
  const selectionHandler = (SecName) => {
    setActiveSection(SecName);
  };
  const mainDiv = useRef();

  const scrollToMainDiv = () => {
    mainDiv.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <SectionsGrid
        onSelection={selectionHandler}
        activeSection={activeSection}
        scrollHandler={scrollToMainDiv}
      />
      <div ref={mainDiv} className={classes.mainDiv}>{sections[activeSection]}</div>
    </div>
  );
};
export default MainSection;
