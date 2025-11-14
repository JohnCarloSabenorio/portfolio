import Greeting from "./Greeting";
import "../../styles/IntroSection.css";
import ContactSection from "../Contact/ContactSection";
export default function IntroSection() {
  return (
    <section className="flex flex-col items-center mt-20">
      <Greeting />
      {/* Contacts */}

      <ContactSection />
    </section>
  );
}
