import SectionHeading from "../../SectionHeading";
import TestimonialCard from "./TestimonialCard";
import useWindowDimensions from "../../../../Hooks/UseWindowDimensions";
import React from "react";
import ResponsiveCarousel from "../../../../features/ResponsiveCarousel";
import { changeArrDimension } from "../../../../features/ChangeArrDimension";

const testimonialCards = [
  {
    name: "Syed Maisam Naqvi",
    position: "CGO, Tassaract",
    img: require("../../../../images/cgo-tassaract.jpeg"),
    msg: "Muhammad Hamza is an exceptionally skilled MERN Stack developer adept at seamlessly managing projects. With his robust technical proficiency and excellent communication skills, he proves to be an invaluable asset.",
  },
  {
    name: "Muhammad Maaz Faisal",
    position: "Lead, Esolace Tech",
    img: require("../../../../images/lead-esolace.jpeg"),
    msg: "I highly recommend Hamza as a Mern stack developer. He used to be my junior, and I can't emphasize enough how dedicated and honest he is. Hamza is always striving to improve himself, and he's the kind of person who goes out of his way to help his colleagues. I truly believe he's not just a great asset but also has the potential to lead teams effectively. You won't regret having him on your team! 👍",
  },

  {
    name: "Muhammad Hassan",
    position: "Software Engineer, Tassaract",
    img: require("../../../../images/se-tassaract.jpeg"),
    msg: "It is an amazing experience to collaborate with Muhammad Hamza. He is not only a good programmer but a great human being as well. I really enjoy working with him 🙂",
  },
  {
    name: "Qazi Mairaj Uddin",
    position: "Software Engineer, Tassaract",
    img: require("../../../../images/se2-tassaract.jpeg"),
    msg: "I am delighted to recommend Hamza for any team or organization looking for a dedicated and hardworking individual. Hamza stands out for his unwavering commitment to his work and his colleagues. Throughout our time working together, I have been consistently impressed by his ability to stay by the side of his co-workers, offering support and assistance whenever needed.",
  },
];

const Testimonial = () => {
  const { width } = useWindowDimensions();
  let updatedTestimonialCards;
  if (width > 992) {
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
