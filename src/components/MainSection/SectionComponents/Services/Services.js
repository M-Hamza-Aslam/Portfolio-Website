import classes from "./Services.module.css";
import {
  MdViewCompact,
  MdViewCarousel,
  MdDashboard,
  MdDataExploration,
  MdPostAdd,
  MdDesignServices,
} from "react-icons/md";
import ServiceCard from "./ServiceCard";
import SectionHeading from "../../SectionHeading";

const services = [
  {
    icon: <MdViewCompact />,
    name: "Portfolio Website",
    detail:
      "Need a portfolio website to attract clients and employers? I can help you create a professional and visually appealing online presence.",
  },
  {
    icon: <MdViewCarousel />,
    name: "Ecommerce Website",
    detail:
      "I provide ecommerce website design and development services to help businesses sell their products or services online. My service includes creating a user-friendly and visually appealing website, setting up payment processing, and implementing security measures to protect sensitive customer data.",
  },
  {
    icon: <MdDashboard />,
    name: "Wordpress Website",
    detail:
      "I offer WordPress website design and development services to help businesses and individuals create a professional and feature-rich website. My service includes customizing the website to meet your specific needs and providing ongoing support and maintenance.",
  },
  {
    icon: <MdDataExploration />,
    name: "Data Analysis Website",
    detail:
      "I offer data analysis website design and development services to help businesses and organizations make sense of their data. My service includes creating interactive dashboards and visualizations to help you better understand and communicate your data.",
  },
  {
    icon: <MdPostAdd />,
    name: "Custom Blog Website",
    detail:
      "I provide custom blog website design and development services to help individuals and businesses share their ideas, thoughts, and experiences online. My service includes creating a visually appealing and user-friendly website, as well as providing ongoing support and maintenance.",
  },
  {
    icon: <MdDesignServices />,
    name: "Logo Design",
    detail:
      "I offer logo design services to help businesses and organizations create a professional and memorable brand identity. My service includes working with you to understand your vision and creating multiple design concepts for you to choose from.",
  },
];

const Services = () => {
  return (
    <>
      <SectionHeading name="Service" detail="No compromise on quality" />
      <div className={classes.services}>
        {services.map((service, ind) => {
          return <ServiceCard key={ind} service={service} />;
        })}
      </div>
    </>
  );
};
export default Services;
