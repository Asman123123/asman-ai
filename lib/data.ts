import {
  ArrowRightLeft,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Cloud,
  DatabaseZap,
  Gauge,
  Headphones,
  Layers3,
  LineChart,
  LockKeyhole,
  Mic,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
  features: string[];
  proof: string;
};

export type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  idealFor: string;
  timeline: string;
  highlighted?: boolean;
};

export const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Pricing", "/pricing"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export const services: Service[] = [
  {
    title: "AI Automation",
    text: "Automate customer support, sales follow-ups, internal tasks, and repetitive workflows with reliable AI systems.",
    icon: BrainCircuit,
    features: ["AI chatbots", "AI employees", "Workflow automation", "CRM integration", "Lead qualification"],
    proof: "Designed to compress response time and reduce manual handoffs.",
  },
  {
    title: "Software Development",
    text: "Build secure web applications, CRM systems, dashboards, portals, and enterprise software.",
    icon: Layers3,
    features: ["Web applications", "CRM systems", "ERP systems", "Admin dashboards", "API integrations"],
    proof: "Product-grade architecture, not one-off scripts.",
  },
  {
    title: "SaaS Development",
    text: "Launch subscription products with scalable architecture, analytics, admin tools, and billing flows.",
    icon: Cloud,
    features: ["SaaS MVP", "Subscription billing", "User dashboard", "Admin panel", "Cloud deployment"],
    proof: "Built around activation, retention, billing, and operational visibility.",
  },
  {
    title: "AI Voice Agents",
    text: "Answer calls, qualify leads, book appointments, and support customers around the clock.",
    icon: Mic,
    features: ["Inbound calls", "Lead routing", "Appointment booking", "Call summaries"],
    proof: "Human-grade call flows with escalation logic.",
  },
  {
    title: "CRM Automation",
    text: "Connect forms, lead routing, sales tasks, follow-ups, and reporting into one operational system.",
    icon: DatabaseZap,
    features: ["HubSpot workflows", "Pipeline automation", "Email automation", "Reporting"],
    proof: "Clean pipeline operations from lead capture to close.",
  },
  {
    title: "Enterprise Solutions",
    text: "Dedicated teams and robust architecture for larger operational systems and long-term product builds.",
    icon: ShieldCheck,
    features: ["Dedicated team", "Enterprise software", "Security planning", "Ongoing support"],
    proof: "Governed delivery for systems that become company infrastructure.",
  },
];

export const trustIndicators = [
  ["Enterprise Solutions", "Systems designed for complex business operations"],
  ["Global Delivery", "Remote-first execution for distributed teams"],
  ["Multi-Industry Expertise", "Experience across operations-heavy sectors"],
  ["Long-Term Support", "Technical support beyond initial launch"],
] as const;

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$5,000+",
    description: "For teams validating automation around one core workflow.",
    idealFor: "Single workflow launch",
    timeline: "2-4 weeks",
    features: ["AI automation setup", "Basic CRM integration", "1 workflow", "Email support", "Launch plan"],
  },
  {
    name: "Growth",
    price: "$15,000+",
    description: "For companies replacing manual operations with connected software.",
    idealFor: "Department-level automation",
    timeline: "4-8 weeks",
    features: ["AI automation", "Web app or dashboard", "CRM integration", "3-5 workflows", "Strategy consultation", "Analytics setup"],
  },
  {
    name: "Enterprise",
    price: "$50,000+",
    description: "For mission-critical software, multiple AI agents, and SaaS architecture.",
    idealFor: "Core operating systems",
    timeline: "8-16+ weeks",
    features: ["Custom software", "Multiple AI agents", "SaaS architecture", "Dedicated project manager", "Ongoing support", "Security planning"],
    highlighted: true,
  },
];

export const industries = [
  ["Real Estate", "Lead qualification, CRM automation, and appointment booking for high-volume sales teams."],
  ["Logistics", "Dispatch automation, document workflows, and client communication systems."],
  ["Healthcare", "Appointment automation, patient support, and internal workflow automation."],
  ["E-commerce", "Customer support AI, order updates, marketing automation, and dashboards."],
  ["Finance", "Reporting dashboards, workflow automation, and client onboarding systems."],
  ["Professional Services", "Client intake, project operations, knowledge workflows, and executive reporting."],
] as const;

export const cases = [
  {
    industry: "Logistics Operations Automation",
    challenge: "Internal workflows and dispatch operations relied on manual coordination.",
    solution: "Automated internal workflows, routing logic, status updates, and operational dashboards.",
    outcome: "Reduced manual processing time significantly.",
    roi: "Ops",
    secondary: "Dispatch coordination became faster and easier to monitor.",
    metrics: [70, 58, 45, 34, 25],
    icon: Workflow,
  },
  {
    industry: "Real Estate Sales Workflow",
    challenge: "Sales teams spent too much time qualifying and following up with leads manually.",
    solution: "Implemented AI-driven lead qualification, CRM automation, reminders, and appointment workflows.",
    outcome: "Improved sales efficiency and response times.",
    roi: "CRM",
    secondary: "Lead response became more consistent across the team.",
    metrics: [30, 42, 56, 70, 82],
    icon: Headphones,
  },
  {
    industry: "SaaS Infrastructure Build",
    challenge: "The product needed scalable architecture and internal automation to support growth.",
    solution: "Developed SaaS architecture, dashboards, automation systems, and cloud deployment workflows.",
    outcome: "Supported rapid growth and operational efficiency.",
    roi: "SaaS",
    secondary: "The platform gained a cleaner foundation for product and operations teams.",
    metrics: [34, 46, 61, 76, 88],
    icon: LineChart,
  },
];

export const stack = ["OpenAI", "Anthropic", "AWS", "Azure", "Google Cloud", "Stripe", "HubSpot", "Twilio"];
export const stackIcons = [Bot, BrainCircuit, Cloud, Network, Building2, Zap, ChartNoAxesCombined, ArrowRightLeft];

export const operatingPrinciples = [
  { title: "Workflow intelligence", text: "We map where decisions, handoffs, and customer response loops actually break down.", icon: Workflow },
  { title: "System architecture", text: "Every automation is designed as part of a durable software and data foundation.", icon: Network },
  { title: "Secure integrations", text: "CRM, billing, cloud, and AI integrations are structured with access control and auditability in mind.", icon: LockKeyhole },
  { title: "Measured outcomes", text: "Dashboards and KPIs are planned from the beginning so impact is visible after launch.", icon: Gauge },
];

export const deliverySteps = [
  ["01", "Discovery", "Map workflows, bottlenecks, data sources, and measurable business goals."],
  ["02", "Strategy", "Define the architecture, automation logic, interfaces, and rollout plan."],
  ["03", "Development", "Build the product, AI agents, CRM automation, dashboards, and integrations."],
  ["04", "Launch & Support", "Measure performance, improve adoption, and extend the system with support."],
] as const;

export const proofBadges = [
  { label: "Core focus", value: "B2B systems" },
  { label: "Delivery model", value: "Strategy + build" },
  { label: "Systems", value: "AI + software" },
  { label: "Compliance", value: "Stripe-ready" },
];

export const comparisonRows = [
  ["AI workflows", "1", "3-5", "Multi-agent orchestration"],
  ["Software build", "Automation setup", "Dashboard or web app", "Custom platform"],
  ["CRM depth", "Basic integration", "Pipeline automation", "Full operating model"],
  ["Analytics", "Launch metrics", "Workflow reporting", "Executive dashboards"],
  ["Support", "Email", "Strategy sessions", "Dedicated project manager"],
  ["Architecture", "Standard", "Scalable", "SaaS + security planning"],
];

export const enterpriseSignals = [CheckCircle2, ArrowRightLeft, ShieldCheck, Gauge];

export const successStories = cases;

export const resourceArticles = [
  { category: "AI Automation", title: "Where AI automation creates the fastest operational leverage", text: "A practical look at workflows, handoffs, and decision points that are ready for automation." },
  { category: "Software Development", title: "How to scope custom software without creating internal complexity", text: "A guide to defining business goals, architecture, integrations, and delivery milestones." },
  { category: "SaaS Strategy", title: "Building SaaS platforms that can scale beyond the MVP", text: "What to plan early: billing, roles, analytics, admin tooling, and cloud deployment." },
  { category: "CRM Systems", title: "CRM automation patterns for faster response and cleaner pipelines", text: "Lead routing, follow-up sequences, notifications, and reporting systems that sales teams can trust." },
  { category: "Digital Transformation", title: "Turning manual operations into measurable digital systems", text: "How to move from fragmented tools to a durable operating layer for the business." },
];

export const trustReasons = [
  { title: "Dedicated Project Teams", text: "Clear ownership, communication, and technical execution from strategy through launch.", icon: Building2 },
  { title: "Enterprise Ready Solutions", text: "Systems designed for reliability, integration, maintainability, and operational adoption.", icon: ShieldCheck },
  { title: "Global Delivery", text: "Remote-first delivery model built for modern distributed organizations.", icon: Network },
  { title: "Long-Term Technical Support", text: "Ongoing improvement, maintenance, and extension after the initial release.", icon: Headphones },
  { title: "Secure Development Practices", text: "Practical attention to access, data flow, deployment, and operational risk.", icon: LockKeyhole },
  { title: "Scalable Architecture", text: "Software foundations that can grow with users, data, workflows, and product scope.", icon: Layers3 },
];


