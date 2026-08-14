import * as iconoir from "@attaditya/iconoir-preact/regular";

export const EXPERIENCES: {
  icon?: keyof typeof iconoir;
  company: string;
  startDate: Date;
  endDate: Date;

  role: {
    name: string;
    type: string;
  };

  contributions: string[];
}[] = [
  {
    icon: "LaptopDevModeRegular",
    company: "InterviewBit",
    startDate: new Date("2024-11-18"),
    endDate: new Date("2025-04-16"),
    role: {
      name: "SDE Intern",
      type: "Internship",
    },
    contributions: [
      [
        "Optimized 85th percentile sync latency from days",
        "to 95th percentile latency of with 15 minutes."
      ].join(" "),
      [
        "Managed development of an internal Android application",
        "utilized by 200+ cross-functional sales and marketing associates.",
      ].join(" "),
      [
        "Worked on the Scaler Companion team to build",
        "AI interview pre-requisite checker."
      ].join(" "),
      [
        "Worked on Dashboards and Mini Games features of the",
        "main Scaler Learning Platform as part of the SSX (UG) team."
      ].join(" "),
    ]
  },
  {
    icon: "LaptopDevModeRegular",
    company: "SingOneSong",
    startDate: new Date("2025-08-29"),
    endDate: new Date("2026-01-09"),
    role: {
      name: "SDE Intern",
      type: "Internship",
    },
    contributions: [
      [
        "Implemented onboarding and core application flows across",
        "web and mobile platforms.",
      ].join(" "),
      [
        "Built interactive game features integrated into the main",
        "product experience.",
      ].join(" "),
      [
        "Performed production bug fixes, refactors, and",
        "codebase improvements.",
      ].join(" "),
      [
        "Revamped the landing page UI, receiving positive",
        "stakeholder feedback.",
      ].join(" "),
    ]
  },
  {
    icon: "LaptopDevModeRegular",
    company: "Wabby AI",
    startDate: new Date("2026-01-12"),
    endDate: new Date("2026-04-12"),
    role: {
      name: "SDE Intern",
      type: "Internship",
    },
    contributions: [
      [
        "Owned development of the core real-time chat",
        "experience using GraphQL subscriptions.",
      ].join(" "),
      [
        "Built modular frontend architecture handling caching,",
        "pagination, and re-render control."
      ].join(" "),
      [
        "Integrated authentication and embedded sign-up flows.",
      ].join(" "),
      [
        "Developed foundational systems for an early-stage",
        "platform prior to public release."
      ].join(" "),
    ]
  },
]

