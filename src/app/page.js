import HomeLayout from "@/components/home-layout";
import FeaturesSection from "@/sections/home/features-section";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <FeaturesSection />
    </HomeLayout>
  );
}
