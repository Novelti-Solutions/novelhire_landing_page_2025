import CallToAction from "@/sections/home/call-to-action";
import FAQSection from "@/sections/home/faq-section";
import HeaderHeroSection from "@/sections/usecases/header-hero-section";
import UsecasesSection from "@/sections/usecases/usecases-section";

export const metadata = {
  title: "NovelHire-usecases",
};

export default function UsecasesPage() {
  return (
    <section>
      {/* header and hero section */}
      <HeaderHeroSection />
      <UsecasesSection />
      <CallToAction />
      <FAQSection />
    </section>
  );
}
