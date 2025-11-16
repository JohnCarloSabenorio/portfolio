import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

export default function Contact() {
  return (
    <div className="p-3 w-full md:w-auto flex flex-col gap-1">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=johncarlosabenorio07@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="italic cursor-pointer"
      >
        <span>
          <EmailIcon />
        </span>{" "}
        johncarlosabenorio07@gmail.com
      </a>
      <a className="italic cursor-pointer">
        <span>
          <PhoneAndroidIcon />
        </span>{" "}
        +63-976-263-2748
      </a>

      <SocialMediaIcons />
    </div>
  );
}
