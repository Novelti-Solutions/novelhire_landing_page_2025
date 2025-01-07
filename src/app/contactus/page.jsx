import AllFaqs from "@/sections/contactus/all-faqs";
import HeaderHeroSection from "@/sections/contactus/header-footer-section";

export const metadata = {
  title: "NovelHire-contatus",
};

export default function ContactUspage() {
  return (
    <section>
      {/* header and hero section */}
      <HeaderHeroSection />
      <AllFaqs />
    </section>
  );
}
