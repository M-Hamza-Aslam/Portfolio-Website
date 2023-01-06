import classes from "./ContactInfo.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const contactInfo = [
  {
    icon: <PhoneAndroidOutlinedIcon />,
    title: "Call Me",
    detail: "+92 313 0260405",
  },
  {
    icon: <EmailOutlinedIcon />,
    title: "Email Me",
    detail: "hamza.prolink@gmail.com",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    title: "Address",
    detail: "Jung Press, Saddar Town, Karachi",
  },
];

const ContactInfo = () => {
  return (
    <div className={classes.main}>
      {contactInfo.map((contInfo, ind) => {
        return (
          <div key={ind} className={classes.contactInfo}>
            {contInfo.icon}
            <div>
              <h2>{contInfo.title}</h2>
              <h3>{contInfo.detail}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ContactInfo;
