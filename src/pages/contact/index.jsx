import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import {
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Mail,
  FileText,
} from "lucide-react";
import "./style.css";

const contactLinks = [
  {
    name: "Instagram",
    username: "@attachmentaditya",
    url: "https://www.instagram.com/attachmentaditya/",
    icon: Instagram,
    color: "#E1306C",
  },
  {
    name: "LinkedIn",
    username: "Attachment Aditya",
    url: "https://www.linkedin.com/in/attachment-aditya/",
    icon: Linkedin,
    color: "#0077B5",
  },
  {
    name: "GitHub",
    username: "@AttAditya",
    url: "https://github.com/AttAditya",
    icon: Github,
    color: "#ffffff",
  },
  {
    name: "YouTube",
    username: "Attachment Studios",
    url: "https://www.youtube.com/@attachmentstudios",
    icon: Youtube,
    color: "#FF0000",
  },
  {
    name: "Email (General)",
    username: "attachment.aditya@gmail.com",
    url: "mailto:attachment.aditya@gmail.com",
    icon: Mail,
    color: "#00bbff",
  },
  {
    name: "Email (Legal)",
    username: "adityaprasaddash.official@gmail.com",
    url: "mailto:adityaprasaddash.official@gmail.com",
    icon: FileText,
    color: "#00ff99",
  },
];

function ContactCard({ contact }) {
  const Icon = contact.icon;

  return (
    <a href={contact.url} target="_blank" rel="noopener noreferrer">
      <Glass className="contact-card">
        <div className="contact-icon" style={{ color: contact.color }}>
          <Icon size={24} />
        </div>
        <div className="contact-info">
          <span className="contact-name">{contact.name}</span>
          <span className="contact-username">{contact.username}</span>
        </div>
      </Glass>
    </a>
  );
}

export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="page-title">
          <Gradient>Get in Touch</Gradient>
        </h1>

        <p className="contact-intro">
          Feel free to reach out to me through any of the following platforms.
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact-grid">
          {contactLinks.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}
