import Footer from "@/components/footer";
import Assessment from "@/sections/features/assessment";
import TeamProductivity from "@/sections/features/team-productivity";
import CallToAction from "@/sections/home/call-to-action";
import FAQSection from "@/sections/home/faq-section";

export const metadata = {
  title: "features - Novelhire",
};
export default function FeaturesPage() {
  return (
    <>
      <Assessment reverse />
      <TeamProductivity />
      <CallToAction />
      <FAQSection />
      <Footer />
    </>
  );
}
