import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
import Community from "@/components/Community";
import AboutUs from "@/components/AboutUs";
import AboutHacks from "@/components/AboutHacks";
import Sponsors from "@/components/Sponsors";
import Header from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-background">
        <Header />
        <Welcome />
        <AboutUs />
        <AboutHacks />
        <FAQs />
        <Community />
        <Sponsors />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
