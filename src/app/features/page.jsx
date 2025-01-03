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
      <Assessment
        subheading="Assess Skills with Precision"
        heading1="Smart, Customizable"
        heading2="Assessments"
        para="Design assessments tailored to your job requirements or choose from our curated library of technical tests. Evaluate real-world skills with coding challenges, problem-solving scenarios, and more."
        buttonText="Learn more"
        footer={[
          "Test skills specific to each role.",
          "Save time with ready-made templates.",
          "Ensure objective evaluations.",
        ]}
        img="/features/profile.svg"
      />
      <Assessment
        subheading="Simplify Every Step of Hiring"
        heading1="Workflow"
        heading2="Automation"
        para="Automate repetitive tasks like scheduling, test invitations, and candidate follow-ups. Focus on hiring while NovelHire handles the logistics."
        buttonText="Learn more"
        footer={[
          "Speed up time-to-hire.",
          "Reduce manual effort.",
          "Keep the hiring process on track.",
        ]}
        img="/features/profile.svg"
        reverse={true}
      />
      <Assessment
        subheading="Make Informed Decisions"
        heading1="Data-Driven"
        heading2="Insights"
        para="Access comprehensive performance reports and analytics. Identify top talent, spot trends, and refine your hiring strategy with actionable data."
        buttonText="Learn more"
        footer={[
          "Gain visibility into candidate performance.",
          "Reduce bias with objective metrics.",
          "Improve decision-making with data-backed insights",
        ]}
        img="/features/profile.svg"
      />
      <TeamProductivity />
      <CallToAction />

      <FAQSection />
      <Footer />
    </>
  );
}
