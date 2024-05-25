import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
import Community from "@/components/Community";
import Sponsors from "@/components/Sponsors";
import Header from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import Section from "@/components/Section";

import welcomeImage from "../public/welcome.jpg";
import aboutImage from "../public/about2.jpg";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-background-100 m-auto">
      <Header />
      <Welcome />
      <div className="py-16 space-y-20 max-w-screen-2xl" id="about">
        <Section
          image={welcomeImage}
          title="Welcome to MRUHacks"
          body="Every October, join 150+ hackers in the Riddell Library and Learning Center for a hackathon experience like no other. Discover a community of like-minded designers, developers, programmers, and tech enthusiasts. Connect and engage with industry mentors from a variety of fields. At MRUHacks, the participant experience comes first. Experience engaging workshops, exciting activities before and during the event, and have the chance to network with not only companies, but your fellow hackers."
        />
        <Section
          image={aboutImage}
          title="About the Competition"
          body="In 2023, Sunny Parmar, Matthew Hrehirchuk, and Jaunie Williams established MRUHacks, organizing the very first event. Attracting an impressive 60 participants, they hosted one of the most successful pilot events in the history of Mount Royal Computing, setting the stage for a series of spectacular events."
          image_side="right"
        />
        <FAQs />
        <Community />
        <Sponsors />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}
