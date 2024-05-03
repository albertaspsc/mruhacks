import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
import Community from "@/components/Community";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Welcome />
      <FAQs />
      <Community />

    </div>
  );
}
