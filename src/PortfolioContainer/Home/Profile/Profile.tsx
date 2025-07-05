import "./Profile.css";
import { Typewriter } from "react-simple-typewriter";
import ScrollService from "../../../utilities/scrollService";
import LinkComponent from "../../../component/LinkComponent";

const scrollToHireMe = () => {
  ScrollService.scrollHandler.scrollToSpecificSection("Contact Me");
};

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-detail-section">
        <div className="profile-details">
          <div className="colz">
            <LinkComponent />
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Prithviraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="profile-details-role-header-section">
              <h1>
                <Typewriter
                  words={[
                    "Front-End Developer 👍",
                    "React Developer 😎",
                    "MERN Stack Developer ⚙️",
                    "Full Stack Developer 💻",
                    "Driven Software Engineer 🥷",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <div className="profile-role-description">
                A seasoned IT professional with over 12 years of experience in
                front-end responsive web application development.
              </div>
            </span>
          </div>
          <div className="profile-button-section">
            <button className="btn primary-btn" onClick={scrollToHireMe}>
              Hire Me
            </button>
            <a
              href="assets/Prithviraj_Front end Developer.pdf"
              download="assets/Prithviraj_Front end Developer.pdf"
            >
              <button className="btn highlighted-btn">Get My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
