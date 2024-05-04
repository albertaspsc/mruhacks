import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
import AboutUs from "@/components/AboutUs";
import AboutHacks from "@/components/AboutHacks";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Welcome />
      <AboutUs />
      <AboutHacks />


    </div>
  );
}
