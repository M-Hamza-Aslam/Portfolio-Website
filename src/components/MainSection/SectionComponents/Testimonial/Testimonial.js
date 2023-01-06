import SectionHeading from "../../SectionHeading";
import TestimonialCard from "./TestimonialCard";
import useWindowDimensions from "../../../../Hooks/UseWindowDimensions";
import React from "react";
import ResponsiveCarousel from "../../../../features/ResponsiveCarousel";
import { changeArrDimension } from "../../../../features/ChangeArrDimension";

const testimonialCards = [
  {
    name: "Basel Gilani",
    position: "Data Engineer",
    img: require("../../../../images/basel.jpg"),
    msg: "Thank you for the hard work you put into developing the website. It's clear that a lot of thought and effort went into it, and it shows in the final product.",
  },
  {
    name: "Usman",
    position: "CEO Fork Devs",
    img: require("../../../../images/usman.jpg"),
    msg: "Your patience and willingness to listen to my ideas and concerns made the development process a pleasure. I'm really happy with how the website turned out.",
  },

  {
    name: "Mustafa",
    position: "Data Analyst",
    img: require("../../../../images/mustafa.jpg"),
    msg: "The website is a huge asset to our business, and we couldn't have done it without your help. Thank you for your contributions.",
  },
  {
    name: "Safeer",
    position: "Graphic Designer",
    img: require("../../../../images/safeer.jpg"),
    msg: "I've received many compliments on the website, and I know it wouldn't have turned out as well as it did without your skills and expertise.",
  },
];

const Testimonial = () => {
  const { width } = useWindowDimensions();
  let updatedTestimonialCards;
  if (width > 768) {
    updatedTestimonialCards = changeArrDimension(testimonialCards, 2);
  } else {
    updatedTestimonialCards = changeArrDimension(testimonialCards, 1);
  }
  return (
    <>
      <SectionHeading name="Testimonial" detail="People reviews about me" />
      <ResponsiveCarousel>
        {updatedTestimonialCards.map((cards, ind) => {
          return <TestimonialCard cards={cards} key={ind} />;
        })}
      </ResponsiveCarousel>
    </>
  );
};
export default Testimonial;
