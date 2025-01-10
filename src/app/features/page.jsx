import Assessment from "@/sections/features/assessment";
import HeaderHeroSection from "@/sections/features/header-hero-section";
import TeamProductivity from "@/sections/features/team-productivity";
import CallToAction from "@/sections/home/call-to-action";
import FAQSection from "@/sections/home/faq-section";

export const metadata = {
  title: "Features-NovelHire",
};

const assessments = [
  {
    subheading: "Assess Skills with Precision",
    heading1: "Smart, Customizable",
    heading2: "Assessments",
    para: "Design assessments tailored to your job requirements or choose from our curated library of technical tests. Evaluate real-world skills with coding challenges, problem-solving scenarios, and more.",
    buttonText: "Learn more",
    footer: [
      "Test skills specific to each role.",
      "Save time with ready-made templates.",
      "Ensure objective evaluations.",
    ],
    img: "/features/profile.svg",
    reverse: false,
  },
  {
    subheading: "Simplify Every Step of Hiring",
    heading1: "Workflow",
    heading2: "Automation",
    para: "Automate repetitive tasks like scheduling, test invitations, and candidate follow-ups. Focus on hiring while NovelHire handles the logistics.",
    buttonText: "Learn more",
    footer: [
      "Speed up time-to-hire.",
      "Reduce manual effort.",
      "Keep the hiring process on track.",
    ],
    img: "/features/profile.svg",
    reverse: true,
  },
  {
    subheading: "Make Informed Decisions",
    heading1: "Data-Driven",
    heading2: "Insights",
    para: "Access comprehensive performance reports and analytics. Identify top talent, spot trends, and refine your hiring strategy with actionable data.",
    buttonText: "Learn more",
    footer: [
      "Gain visibility into candidate performance.",
      "Reduce bias with objective metrics.",
      "Improve decision-making with data-backed insights",
    ],
    img: "/features/profile.svg",
    reverse: false,
  },
  {
    subheading: "Foster Team Alignment",
    heading1: "Collaborative Hiring",
    heading2: "Tools",
    para: "Bring your hiring team together with tools for sharing feedback and discussing candidates in real-time. Ensure everyone is aligned before making critical decisions.",
    buttonText: "Learn more",
    footer: [
      "Centralize team feedback.",
      "Speed up candidate evaluations.",
      "Avoid miscommunication in decision-making.",
    ],
    img: "/features/profile.svg",
    reverse: true,
  },
  {
    subheading: "Impress Talent with a Professional Process",
    heading1: "Seamless Candidate",
    heading2: "Experience",
    para: "Deliver a smooth and engaging experience for candidates, from test invitations to feedback. Leave a lasting impression that reflects your company’s values.",
    buttonText: "Learn more",
    footer: [
      "Enhance your employer brand.",
      "Ensure clear communication with candidates.",
      "Attract top talent with a world-class experience.",
    ],
    img: "/features/profile.svg",
    reverse: false,
  },
  {
    subheading: "Work Seamlessly with Your Existing Tools",
    heading1: "ATS",
    heading2: "Integration",
    para: "Integrate NovelHire with your Applicant Tracking System (ATS) to streamline your hiring pipeline. Keep all candidate data in one place without extra hassle.",
    buttonText: "Learn more",
    footer: [
      "Simplify data management.",
      "Avoid duplication of efforts.",
      "Ensure a seamless recruitment process.",
    ],
    img: "/features/profile.svg",
    reverse: true,
  },
];

export default function FeaturesPage() {
  return (
    <section>
      {/* header and hero */}
      <HeaderHeroSection />

      {assessments.map((assessment, index) => (
        <Assessment
          key={index}
          subheading={assessment.subheading}
          heading1={assessment.heading1}
          heading2={assessment.heading2}
          para={assessment.para}
          buttonText={assessment.buttonText}
          footer={assessment.footer}
          img={assessment.img}
          reverse={assessment.reverse}
        />
      ))}
      <TeamProductivity />
      <CallToAction />

      <FAQSection />
    </section>
  );
}
