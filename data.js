import Content from "@/components/tab-component/content";
import Content0 from "@/components/tab-component/content";
import {
  BriefcaseConveyorBelt,
  Handshake,
  Sparkles,
  Video,
  Workflow,
} from "lucide-react";

export const footerData = {
  features: [
    { title: "Budgeting", isNew: false },
    { title: "Savings", isNew: false },
    { title: "Accounts", isNew: false },
    { title: "Secured Data", isNew: true },
  ],
  solutions: [
    { title: "Financial Planing", isNew: false },
    { title: "Investment", isNew: true },
    { title: "Security", isNew: false },
    { title: "Fraud Detection", isNew: false },
  ],
  resources: [
    { title: "Blog", isNew: false },
    { title: "Community", isNew: false },
    { title: "Tutorials", isNew: false },
    { title: "Monitoring", isNew: true },
  ],
  social: [
    { title: "Facebook", isNew: false },
    { title: "Twitter", isNew: false },
    { title: "Instagram", isNew: false },
    { title: "LinkedIn", isNew: false },
  ],
};

export const featuresTabData = [
  {
    id: 1,
    title: "Smart",
    symbol: <Video className="h-4 w-4" />,
    content: <Content activeTab="Smart" />,
  },
  {
    id: 2,
    title: "Automation",
    symbol: <Workflow className="h-4 w-4" />,
    content: <Content activeTab="Automation" />,
  },
  {
    id: 3,
    title: "Insights",
    symbol: <Sparkles className="h-4 w-4" />,
    content: <Content activeTab="Insights" />,
  },
  {
    id: 4,
    title: "Collaboration",
    symbol: <Handshake className="h-4 w-4" />,
    content: <Content activeTab="Collaboration" />,
  },
  {
    id: 5,
    title: "Experience",
    symbol: <BriefcaseConveyorBelt className="h-4 w-4" />,
    content: <Content activeTab="Experience" />,
  },
];

export const usecasesTabData = [
  {
    id: 1,
    title: "Scaling",
    symbol: <Video className="h-4 w-4" />,
    content: <Content0 activeTab="Scaling" />,
  },
  {
    id: 2,
    title: "Specialization",
    symbol: <Workflow className="h-4 w-4" />,
    content: <Content0 activeTab="Specialization" />,
  },
  {
    id: 3,
    title: "Efficiency",
    symbol: <Sparkles className="h-4 w-4" />,
    content: <Content0 activeTab="Efficiency" />,
  },
  {
    id: 4,
    title: "Enhance",
    symbol: <Handshake className="h-4 w-4" />,
    content: <Content0 activeTab="Enhance" />,
  },
  {
    id: 5,
    title: "Reduce Bias",
    symbol: <BriefcaseConveyorBelt className="h-4 w-4" />,
    content: <Content0 activeTab="Reduce Bias" />,
  },
];