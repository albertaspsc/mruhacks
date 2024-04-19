import FAQs from "@/components/FAQ";
import Welcome from "@/components/Welcome";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Welcome />
      <FAQs />

    </div>
  );
}
