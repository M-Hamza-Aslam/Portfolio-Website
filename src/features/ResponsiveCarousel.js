import Carousel from "react-material-ui-carousel";

const carouselProps = {
  navButtonsProps: {
    style: {
      display: "none",
    },
  },
  indicatorIconButtonProps: {
    style: {
      color: "#ff451b",
      margin: " 10px",
    },
  },
  activeIndicatorIconButtonProps: {
    style: {
      border: "2px solid #ffb400",
      padding: "2px",
    },
  },
  animation: "slide",
};

const ResponsiveCarousel = (props) => {
  return <Carousel {...carouselProps}>{props.children}</Carousel>;
};
export default ResponsiveCarousel;
