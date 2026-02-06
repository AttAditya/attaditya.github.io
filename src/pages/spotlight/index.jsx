import { Loki } from "@components/Loki";
import { Glass } from "@components/Glass";
import { JSONBox } from "@components/JSONBox";
import { Gradient } from "@components/Gradient";
import logo from "@assets/images/logo.png";
import "./style.css";

export function Spotlight() {
  const birthDate = new Date("2005-07-24");
  const today = new Date();
  const age = Math.round((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000) * 10) / 10;

  const todayFormatted = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const aboutData = {
    name: "Aditya",
    alias: ["AttAditya", "Attachment Aditya", "Aditya Prasad Dash"],
    age: {
      years: Math.floor(age),
      months: Math.round((age - Math.floor(age)) * 12),
    },
    interests: ["Programming", "Robotics", "Maths", "Aviation", "Music"],
    status: "CS Student @ Scaler School of Technology",
  };

  return (
    <div className="spotlight-page">
      <div className="spotlight-content">
        <div className="spotlight-hero">
          <img src={logo} alt="Pixel Aditya" className="spotlight-avatar" />
          <div className="spotlight-subtitle">
            {"ATTACHMENT".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
          <h1 className="spotlight-title">
            <Loki text="ADITYA" />
          </h1>
        </div>

        <Glass className="spotlight-intro">
          <p>
            Hi there! I'm <Gradient>Aditya</Gradient>, a Pink coloured Pixelated
            Australian Panda who likes sleeping all day and I also live in Mercury.
          </p>
          <p>Just kidding.</p>
          <p>
            I'm <strong>Aditya</strong>, or as some of you might know me, I'm also
            known as <Gradient>AttAditya</Gradient>,{" "}
            <Gradient>Attachment Aditya</Gradient>, or{" "}
            <Gradient>Aditya Prasad Dash</Gradient>.
          </p>
          <p>
            As of now ({todayFormatted}), I'm {Math.round(age)} ({age.toFixed(1)})
            years old. As of creating this website, I'm a college student studying
            Computer Science.
          </p>
          <p>
            My interests lie in <Gradient>programming</Gradient>,{" "}
            <Gradient>robotics</Gradient>, <Gradient>maths</Gradient>,{" "}
            <Gradient>aviation</Gradient>, and <Gradient>music</Gradient>.
          </p>
          <p>
            I have put together this website to showcase some of my projects,
            interests and hobbies. Feel free to navigate using the sidebar!
          </p>
        </Glass>

        <div className="spotlight-json">
          <h3>
            <Gradient>about.json</Gradient>
          </h3>
          <JSONBox data={aboutData} />
        </div>
      </div>
    </div>
  );
}
