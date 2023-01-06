import classes from "./Contact.module.css";

import SectionHeading from "../../SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <SectionHeading
        name="Contact Me"
        detail="Contact Me to get your work done"
      />
      <div className={classes.main}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
