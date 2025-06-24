import { Blob } from "../../components/blob";
import { Loki } from "../../components/loki";

import PxAditya from "../../assets/PxAditya.png";
import "./style.css";
import { useEffect } from "react";
import { Glass } from "../../components/glass";

export function SpotlightPage() {
  let birthDate = new Date("2005-07-24");
  let today = new Date();
  let age = Math.round((today - birthDate) / (3155760000)) / 10;

  const weekday = today.toLocaleString('en-US', { weekday: 'long' });
  const day = String(today.getDate()).padStart(2, '0');
  const month = today.toLocaleString('en-US', { month: 'long' });
  const year = today.getFullYear();

  const today_date = `${weekday}, ${day} ${month}, ${year}`;

  useEffect(() => {
    window.deactivateLoader()
  }, []);

  return (<>
    <div className="spotlight-page">
      <div className="spotlight-background">
        <Blob />
      </div>

      <div className="spotlight-content">
        <div className="spotlight-block">
          <div className="spotlight-subtitle">
            <div className="spotlight-subtitle-content loki-text">
              {
                "ATTACHMENT".split("").map(
                  (char, index) => <span key={`${char}${index}`}>
                    {char}
                  </span>
                )
              }
            </div>
          </div>
          <div className="spotlight-title">
            <Loki text="ADITYA" />
          </div>
        </div>

        <Glass className="spotlight-block">
          <div className="spotlight-intro">
            Hi there!
            
            <br />
            <br />

            I'm a Pink coloured Pixelated Austrailian Panda who
            likes sleeping all day and I also live in Mercury.
            
            <br />
            <br />

            Just kidding.
            
            <br />
            <br />

            I'm <strong>Aditya</strong>, or as some of you might
            know me, I'm also known as AttAditya, Attachment Aditya
            or Aditya Prasad Dash. As of now ({today_date}),
            I'm {Math.round(age)} ({age}) years old. As of creating
            this website, I'm a college student studying Computer
            Science.

            <br />
            <br />

            I have put together this website to showcase some of
            my projects, interests and hobbies. Maybe you can 
            by using the navigation bar at the top left of the
            page.
            
            <br />
            <br />
            
            Hope you find something interesting here!
          </div>
        </Glass>
      </div>

      <div className="spotlight-logo">
        <img src={PxAditya} alt="Pixel Aditya" />
      </div>
    </div>
  </>);
}
