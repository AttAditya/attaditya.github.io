import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import { ExternalLink } from "lucide-react";
import "./style.css";

const cpProfiles = [
  {
    platform: "LeetCode",
    username: "AttAditya",
    url: "https://leetcode.com/AttAditya",
    color: "#ffa116",
  },
  {
    platform: "Codeforces",
    username: "attaditya",
    url: "https://codeforces.com/profile/attaditya",
    color: "#1f8acb",
  },
];

export function CompetitiveProgramming() {
  return (
    <div className="cp-page">
      <div className="cp-content">
        <h1 className="page-title">
          <Gradient>Competitive Programming</Gradient>
        </h1>

        <p className="cp-intro">
          I enjoy solving algorithmic problems and participating in competitive
          programming contests. Here are my profiles on various platforms.
        </p>

        <div className="cp-profiles">
          {cpProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Glass className="cp-profile-card">
                <div className="cp-platform" style={{ color: profile.color }}>
                  {profile.platform}
                </div>
                <div className="cp-username">@{profile.username}</div>
                <ExternalLink size={18} className="cp-link-icon" />
              </Glass>
            </a>
          ))}
        </div>

        <Glass className="cp-stats-card">
          <h3>
            <Gradient>LeetCode Stats</Gradient>
          </h3>
          <div className="leetcode-card-container">
            <img
              src="https://leetcard.jacoblin.cool/attaditya?theme=dark&font=Lexend&ext=contest"
              alt="LeetCode Stats"
              className="leetcode-card"
            />
          </div>
        </Glass>
      </div>
    </div>
  );
}
