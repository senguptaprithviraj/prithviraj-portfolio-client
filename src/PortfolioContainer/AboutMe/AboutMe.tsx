import "./AboutMe.css";

import ScreenHeading from "../../component/ScreenHeading";
import type { ScreenComponentType } from "../../utilities/commonUtils";

import aboutMeImage from "../../assets/about-me/about-me-image.webp";

const highlightTextList: string[] = [
  "Create an interactive front-end based on the provided design.",
  "Experienced in creating accessible web applications that meet Ontario’s accessibility standards (WCAG 2.0/2.1 compliance).",
  "Experienced in building server-rendered and statically generated React applications using Next.js for optimal performance and SEO.",
  "Utilize React hooks, Context API, Tailwind CSS, and component-driven architecture for maintainable UI development.",
  "Integrating frontend applications with both RESTful and GraphQL APIs for data retrieval and interaction.",
  "Deploy and manage apps using AWS, GitLab CI/CD pipelines, and Docker for streamlined development workflows.",
  "Git/GitLab proficient, with agile workflow experience and a strong understanding of collaborative development.",
];
const AboutMe = ({ id }: ScreenComponentType) => {
  return (
    <div className="about-me-container" id={id}>
      <div className="about-me-parent">
        <ScreenHeading
          title="About "
          highlightedTitle="Me"
          subHeading="Full Stack MERN Developer | Toronto-Based | Building Scalable Web Applications"
        />

        <div className="about-me-card">
          <div className="table-row about-me-image-container">
            <img
              className="about-me-image"
              src={aboutMeImage}
              alt="about me"
            ></img>
          </div>
          <div className="table-row about-me-row">
            <div className="table-colz about-me-section">
              <div>
                <span className="description-title ">
                  Hello, I am{" "}
                  <span className="highligted-text">Prithviraj Sengupta</span>
                </span>
              </div>
              <div className="bullet-section">
                <span>
                  I am a passionate Full Stack Developer with a strong
                  foundation in MERN stack technologies. I have a keen interest
                  in building scalable web applications and exploring new
                  technologies. I am always eager to learn and grow in my field.
                </span>
              </div>
              <div>
                {highlightTextList.map((text, index) => {
                  return (
                    <div className="about-me-bullet-container" key={index}>
                      <span className="bullet-text">
                        <div className="flower"></div> {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
