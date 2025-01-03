import HomeLayout from "@/components/home-layout";
import HowItWorks from "@/sections/home/how-it-works";
import FeaturesSection from "@/sections/home/features-section";
import Image from "next/image";
import FAQSection from "@/sections/home/faq-section";

export default function Home() {
  return (
    <HomeLayout>
      {/* <FeaturesSection /> */}
      <HowItWorks />
      {/* <FeaturesSection /> */}
      <FAQSection />
    </HomeLayout>
  );
}
