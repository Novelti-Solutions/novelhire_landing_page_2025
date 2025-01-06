import Footer from "@/components/footer";
import Assessment from "@/sections/features/assessment";
import TeamProductivity from "@/sections/features/team-productivity";
import CallToAction from "@/sections/home/call-to-action";
import FAQSection from "@/sections/home/faq-section";
import UsecasesSection from "@/sections/usecases/usecases-section";

export const metadata = {
  title: "Usecases - Novelhire",
};
export default function UsecasesPage() {
  return (
    <>
      <UsecasesSection/>
      <CallToAction />

      <FAQSection />
      <Footer />
    </>
  );
}
