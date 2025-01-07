import Content from "@/components/tab-component/content";
import { Button } from "@/components/ui/button";
import {
  BriefcaseConveyorBelt,
  Handshake,
  Sparkles,
  Video,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const footerData = {
  Features: [
    {
      title: "Smart, Customizable Assessments",
      isNew: false,
      url: "/features",
    },
    { title: "Workflow Automation", isNew: false, url: "/features" },
    { title: "Data-Driven Insights", isNew: false, url: "/features" },
    { title: "More...", isNew: true, url: "/features" },
  ],
  Usecases: [
    { title: "Scaling a Growing Team", isNew: false, url: "/usecases" },
    { title: "Hiring for Specialized Roles", isNew: true, url: "/usecases" },
    { title: "Improving Hiring Efficiency", isNew: false, url: "/usecases" },
    { title: "More..", isNew: false, url: "/usecases" },
  ],
  Resources: [
    { title: "Blog", isNew: false, url: "#" },
    { title: "Contact Support", isNew: false, url: "#" },
    { title: "Help", isNew: false, url: "#" },
    { title: "Monitoring", isNew: true, url: "#" },
  ],
  Social: [
    {
      title: "Facebook",
      isNew: false,
      url: "https://www.facebook.com/profile.php?id=61558057150364",
      isTarget: true,
    },
    {
      title: "Twitter",
      isNew: false,
      url: "https://x.com/novelhire",
      isTarget: true,
    },
    {
      title: "Instagram",
      isNew: false,
      url: "https://www.instagram.com/novelhire/",
      isTarget: true,
    },
    { title: "LinkedIn", isNew: false, url: "#", isTarget: true },
  ],
};

export const featuresTabData = [
  {
    id: 1,
    title: "Smart",
    symbol: <Video className="h-4 w-4" />,
    keyPoints: [],
    content: (
      <Content
        title="Smart, Customizable Assessments"
        subTitle="Design assessments tailored to your job requirements or choose from our curated library of technical tests. Evaluate real-world skills with coding challenges, problem-solving scenarios, and more."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p className="text-base text-theme-primaryText">
              {" "}
              Evaluate Skills That Matter
            </p>
          </div>
        }
      />
    ),
  },
  {
    id: 2,
    title: "Automation",
    keyPoints: [],
    symbol: <Workflow className="h-4 w-4" />,
    content: (
      <Content
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p> Evaluate Skills That Matter</p>
          </div>
        }
        title="Workflow Automation"
        subTitle="Content:Automate repetitive tasks like scheduling, test invitations, and candidate follow-ups. Focus on hiring while NovelHire handles the logistics."
      />
    ),
  },
  {
    id: 3,
    title: "Insights",
    symbol: <Sparkles className="h-4 w-4" />,
    keyPoints: [],

    content: (
      <Content
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p> Evaluate Skills That Matter</p>
          </div>
        }
        title="Data-Driven Insights"
        subTitle="Access comprehensive performance reports and analytics. Identify top talent, spot trends, and refine your hiring strategy with actionable data."
      />
    ),
  },
  {
    id: 4,
    title: "Collaboration",
    symbol: <Handshake className="h-4 w-4" />,
    keyPoints: [],

    content: (
      <Content
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p> Evaluate Skills That Matter</p>
          </div>
        }
        title="Collaborative Hiring Tools"
        subTitle="Bring your hiring team together with tools for sharing feedback and discussing candidates in real-time. Ensure everyone is aligned before making critical decisions."
      />
    ),
  },
  {
    id: 5,
    title: "Experience",
    symbol: <BriefcaseConveyorBelt className="h-4 w-4" />,
    keyPoints: [],

    content: (
      <Content
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p> Evaluate Skills That Matter</p>
          </div>
        }
        title="Seamless Candidate Experience"
        subTitle="Deliver a smooth and engaging experience for candidates, from test invitations to feedback. Leave a lasting impression that reflects your company’s values."
      />
    ),
  },
  {
    id: 6,
    title: "ATS",
    symbol: <BriefcaseConveyorBelt className="h-4 w-4" />,
    keyPoints: [],

    content: (
      <Content
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/features">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p> Evaluate Skills That Matter</p>
          </div>
        }
        title="ATS Integration"
        subTitle="Integrate NovelHire with your Applicant Tracking System (ATS) to streamline your hiring pipeline. Keep all candidate data in one place without extra hassle."
      />
    ),
  },
];

export const usecasesTabData = [
  {
    id: 1,
    title: "Scaling",
    symbol: <Video className="h-4 w-4" />,
    content: (
      <Content
        title="Scaling a Growing Team"
        subTitle="Growing fast? NovelHire is designed to help you quickly identify, assess, and hire top technical talent without compromising quality. Streamline every step of your hiring process to meet growing demands."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/usecases">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p>Effortlessly Expand Your Workforce</p>
          </div>
        }
      />
    ),
    keyPoints: [
      "Automate scheduling and test delivery",
      "Evaluate candidates at scale with reliable assessments",
      "Identify top performers using data-driven insights",
    ],
  },
  {
    id: 2,
    title: "Specialization",
    symbol: <Workflow className="h-4 w-4" />,
    keyPoints: [
      "Create tailored assessments for unique roles",
      "Focus on critical skills with specialized tests",
      "Collaborate with your team to ensure the right fit",
    ],
    content: (
      <Content
        title="Hiring for Specialized Roles"
        subTitle="When filling niche or highly technical roles, precision matters. NovelHire’s customizable assessments ensure candidates are evaluated on the exact skills required for success in your organization."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/usecases">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p>Effortlessly Expand Your Workforce</p>
          </div>
        }
      />
    ),
  },
  {
    id: 3,
    title: "Efficiency",
    symbol: <Sparkles className="h-4 w-4" />,
    keyPoints: [
      "Automate candidate communication and test scoring",
      "Consolidate candidate data in a centralized platform",
      "Gain actionable insights to speed up decision-making",
    ],
    content: (
      <Content
        title="Improving Hiring Efficiency"
        subTitle="Too much time spent on repetitive tasks? NovelHire automates key steps in the hiring process, enabling your team to focus on strategic decision-making."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/usecases">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p>Effortlessly Expand Your Workforce</p>
          </div>
        }
      />
    ),
  },
  {
    id: 4,
    title: "Enhance",
    symbol: <Handshake className="h-4 w-4" />,
    keyPoints: [
      "Offer user-friendly assessments",
      "Provide timely feedback to candidates",
      "Ensure every interaction reflects your brand values",
    ],
    content: (
      <Content
        title="Enhancing Candidate Experience"
        subTitle="Deliver a seamless and professional hiring experience that leaves candidates impressed. Show that your organization values their time and effort with clear communication and smooth processes."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/usecases">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p>Effortlessly Expand Your Workforce</p>
          </div>
        }
      />
    ),
  },
  {
    id: 5,
    title: "Reduce Bias",
    symbol: <BriefcaseConveyorBelt className="h-4 w-4" />,
    keyPoints: [
      "Use unbiased, skill-based evaluations",
      "Leverage data to support hiring decisions",
      "Ensure transparency and fairness in the hiring process",
    ],
    content: (
      <Content
        title="Reducing Bias in Hiring"
        subTitle="Bias in hiring decisions can hinder your ability to build a diverse and high-performing team. NovelHire ensures objectivity with standardized assessments and actionable analytics."
        buttons={
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/usecases">
              <Button className="rounded-none" size="lg">
                Learn More
              </Button>
            </Link>

            <p>Effortlessly Expand Your Workforce</p>
          </div>
        }
      />
    ),
  },
];
