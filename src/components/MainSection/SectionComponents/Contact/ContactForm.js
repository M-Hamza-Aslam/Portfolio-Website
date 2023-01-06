import classes from "./ContactForm.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgvglkd");
  const [mobile, setMobile] = useState("");

  // validate value
  const numberHandler = (val) => {
    const validatedValue = val.target.value.replace(/[^-+0-9]/g, "");
    setMobile(validatedValue);
  };
  if (state.succeeded) {
    setTimeout(() => {
      handleSubmit((state) => (state.succeeded = false));
    }, 3000);
  }
  return (
    <>
      {state.succeeded ? (
        <p>Message has submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputDiv}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required={true}
              className={classes.firstInput}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required={true}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={classes.inputDiv}>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone"
              onChange={(e) => numberHandler(e)}
              value={mobile}
              className={classes.firstInput}
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required={true}
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <textarea
            className={classes.textarea}
            id="message"
            name="message"
            placeholder="Your Message"
            required={true}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className={classes.submitBtn}
            type="submit"
            disabled={state.submitting}
          >
            Submit Now
          </button>
        </form>
      )}
    </>
  );
};
export default ContactForm;
