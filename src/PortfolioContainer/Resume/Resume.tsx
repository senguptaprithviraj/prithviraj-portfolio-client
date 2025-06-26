import { useState } from "react";
import ScreenHeading from "../../component/ScreenHeading";
import { ScreenComponentType } from "../../utilities/commonUtils";

import "./Resume.css";
import ResumeDetails from "./ResumeDetails";
import { resumeBullets } from "./ResumeMetadata";

const Resume = ({ id }: ScreenComponentType) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  const handleCarousal = (index: number) => {
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => {
            handleCarousal(index);
          }}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={"bullet-" + index}
        >
          <img
            className="bullet-logo"
            // src={InterestsBullet}
            src={`/assets/resume/${bullet.logoSrc}`}
            alt="Bullet Logo"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreens = () => {
    return (
      <div
        // style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        <ResumeDetails currentContentIndex={selectedBulletIndex} />
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={id}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My career journey" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
