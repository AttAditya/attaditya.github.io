import * as iconoir from "@attaditya/iconoir-preact/regular";

export const SOCIALS: {
  icon: keyof typeof iconoir;
  title?: string;
  url: string;
}[][] = [
  [
    {
      icon: "MailRegular",
      url: "mailto:hello@attaditya.space",
    },
    {
      icon: "GithubRegular",
      url: "https://github.com/AttAditya",
    },
    {
      icon: "GitlabFullRegular",
      url: "https://gitlab.com/AttAditya",
    },
    {
      icon: "LinkedinRegular",
      url: "https://linkedin.com/in/attachment-aditya",
    },
    {
      icon: "XRegular",
      url: "https://x.com/its_attaditya",
    },
  ],
  [
    {
      icon: "JournalRegular",
      title: "Resume",
      url: "https://resume.attaditya.space",
    }
  ]
];

