import AllFaqs from "@/sections/contactus/all-faqs";
import HeroPage from "@/sections/requestdemo/hero-page";
import RequestDemoForm from "@/sections/requestdemo/request-demo-form";

export default function RequestDemopage() {
  return (
    <div>
      <HeroPage
        caption={
          "See How NovelHire Revolutionizes Talent Evaluation and Development"
        }
        title={"Experience AI-Driven Skill Assessments in Action"}
        content={
          "Ready to explore how NovelHire can elevate your organization’s hiring, onboarding, and employee development processes? Schedule a personalized demonstration to witness our AI-driven interviews and comprehensive Skill Gap Analysis in real time."
        }
      />

      <RequestDemoForm />
      <AllFaqs />
    </div>
  );
}
