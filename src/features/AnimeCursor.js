import AnimatedCursor from "react-animated-cursor";
const AnimeCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="210, 40, 27"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={10}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};
export default AnimeCursor;
