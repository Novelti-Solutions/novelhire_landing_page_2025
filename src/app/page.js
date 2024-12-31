import HomeLayout from "@/components/home-layout";
import HowItWorks from "@/sections/home/how-it-works";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <HowItWorks />
    </HomeLayout>
  );
}
