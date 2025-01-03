import { Button } from "@/components/ui/button";
import TimelineItem from "./time-line";

// items
const items = [
  {
    number: 1,
    leftContent: {
      path: "/home/timeline1.svg",
    },
    rightContent: {
      title: "Create Job-Specific Assessments",
      description:
        "Start by selecting from our extensive library of pre-built technical tests or create custom assessments that align with your job requirements.",
      caption: "Tailored Testing for Every Role",
    },
  },
  {
    number: 2,

    leftContent: {
      path: "/home/timeline2.png",
    },
    rightContent: {
      title: "Create Job-Specific Assessments",
      description:
        "Start by selecting from our extensive library of pre-built technical tests or create custom assessments that align with your job requirements.",
      caption: "Tailored Testing for Every Role",
    },
  },
  {
    number: 3,
    leftContent: {
      path: "/home/timeline3.svg",
    },
    rightContent: {
      title: "Invite Candidates Effortlessly",
      description:
        "Easily send test invitations to candidates with personalized messaging. Our platform automatically tracks test completions and updates you in real-time.",
      caption: "Tailored Testing for Every Role",
    },
  },
  {
    number: 4,
    leftContent: {
      path: "/home/timeline3.svg",
    },
    rightContent: {
      title: "Evaluate with Precision",
      description:
        "Access detailed candidate performance reports with scores, rankings, and insights into their strengths and weaknesses. Make informed decisions backed by reliable data.",
      caption: "Tailored Testing for Every Role",
    },
  },
  {
    number: 5,
    leftContent: {
      path: "/home/timeline3.svg",
    },
    rightContent: {
      title: "Make Confident Hiring Decisions",
      description:
        "Leverage comprehensive insights to confidently select the best candidate for the role. Export reports and share them with stakeholders to finalize decisions.",
      caption: "Tailored Testing for Every Role",
    },
  },
];

const HowItWorks = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col max-w-screen-sm mx-auto gap-4 my-4 text-center">
        <span className="text-xs font-bold uppercase">How NovelHire Works</span>
        <h2 className="font-mono text-theme-primary text-3xl font-bold md:text-4xl lg:text-5xl">
          Take a look at how we make it done
        </h2>
        <p className="text-sm font-semibold md:text-base lg:text-lg ">
          Our streamlined, step-by-step process ensures you hire top talent
          faster and more effectively.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            number={item.number}
            leftContent={item.leftContent}
            rightContent={item.rightContent}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
      <div className="flex justify-center ">
        <Button className="bg-theme-primary hover:bg-theme-secondary">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
