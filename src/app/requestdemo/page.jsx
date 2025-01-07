import AllFaqs from "@/sections/contactus/all-faqs";
import HeaderHeroSection from "@/sections/requestdemo/header-hero-section";
import HeroPage from "@/sections/requestdemo/hero-page";
import RequestDemoForm from "@/sections/requestdemo/request-demo-form";

export default function RequestDemopage() {
  return (
    <div>
      <HeaderHeroSection />
      <RequestDemoForm />
      <AllFaqs />
    </div>
  );
}
