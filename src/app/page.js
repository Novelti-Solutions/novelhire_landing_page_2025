import HomeLayout from "@/components/home-layout";
import HowItWorks from "@/sections/home/how-it-works";
import FeaturesSection from "@/sections/home/features-section";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <HowItWorks />
      <FeaturesSection />
    </HomeLayout>
  );
}
