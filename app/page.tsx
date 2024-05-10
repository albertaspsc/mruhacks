import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
import Community from "@/components/Community";
import Sponsors from "@/components/Sponsors";
import Header from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import Section from "@/components/section";

import catImage from "../public/cat.jpg";
import littleGuy from "../public/Little_Guy.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Welcome />
      <div className="my-5 space-y-20 max-w-screen-2xl">
        <Section
          image={catImage}
          title="About the Competition"
          body="In 2023, Sunny Parmar, Matthew Hrehirchuk, and Jaunie Williams
            established MRUHacks, organizing the very first event. Attracting an
            impressive 60 participants, they hosted one of the most successful
            pilot events in the history of Mount Royal Computing, setting the
            stage for a series of spectacular events."
        />

        <Section
          image={littleGuy}
          title="The MRUHacks Story"
          body="In 2023, Sunny Parmar, Matthew Hrehirchuk, and Jaunie Williams established MRUHacks, organizing the very first event. Attracting an impressive 60 participants, they hosted one of the most successful pilot events in the history of Mount Royal Computing, setting the stage for a series of spectacular events."
          image_side="right"
        >
          <button className="btn bg-primary-500">Get Started</button>
        </Section>

        <FAQs />
        <Community />
        <Sponsors />
        <ScrollToTop />
      </div>

      <Footer />
    </div>
  );
}
