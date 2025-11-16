import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start gap-1">
      <a href="https://github.com/JohnCarloSabenorio" target="_blank">
        <GitHubIcon sx={{ fontSize: 30 }} />
      </a>
      <a
        href="https://www.linkedin.com/in/john-carlo-sabenorio-732259244/"
        target="_blank"
      >
        <LinkedInIcon sx={{ fontSize: 30 }} />
      </a>
      <a href="https://www.facebook.com/jc.sabenorio.2025" target="_blank">
        <FacebookIcon sx={{ fontSize: 30 }} />
      </a>
    </div>
  );
}
