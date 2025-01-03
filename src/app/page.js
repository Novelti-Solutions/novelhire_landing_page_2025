import HomeLayout from "@/components/home-layout";
import HowItWorks from "@/sections/home/how-it-works";
import FeaturesSection from "@/sections/home/features-section";
import Image from "next/image";
import CallToAction from "@/sections/home/call-to-action";
import FAQSection from "@/sections/home/faq-section";

export default function Home() {
  return (
    <HomeLayout>
      <FeaturesSection />
      <HowItWorks />
      <CallToAction />
      <FAQSection />
    </HomeLayout>
  );
}
