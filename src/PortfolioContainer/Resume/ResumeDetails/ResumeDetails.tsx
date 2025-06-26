import { AnimatePresence } from "framer-motion";
import ResumeHeading from "../ResumeHeading";
import {
  educationDetails,
  interestDetails,
  programmingSkillsDetails,
  workExperienceDetails,
} from "../ResumeMetadata";
import "./ResumeDetails.css";
import { FadeTransition } from "../../../utilities/FadeTransition";

type ResumeDetailsProps = {
  currentContentIndex: number;
};
const ResumeDetails = ({ currentContentIndex }: ResumeDetailsProps) => {
  return (
    <AnimatePresence mode="wait">
      {currentContentIndex === 0 && (
        <FadeTransition key="content-0">
          {educationDetails.map((education, index) => (
            <div
              className="resume-screen-container education-container"
              key={"education-details" + index}
            >
              <ResumeHeading
                heading={education.heading}
                subHeading={education.subHeading}
                university={education.university}
                fromDate={education.fromDate}
                toDate={education.toDate}
              />
            </div>
          ))}
        </FadeTransition>
      )}

      {currentContentIndex === 1 && (
        <FadeTransition key="content-1">
          <div className="resume-screen-container programming-skills-container">
            {programmingSkillsDetails.map((programmingSkill, index) => (
              <div className="skill-parent" key={"programming-skill" + index}>
                <div className="skill-label">
                  {" "}
                  <div className="heading-bullet"></div>
                  <span>{programmingSkill.skill}</span>
                </div>

                <div className="skill-percentage">
                  <div
                    style={{ width: programmingSkill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeTransition>
      )}

      {currentContentIndex === 2 && (
        <FadeTransition key="content-2">
          <div className="resume-screen-container work-experience-container">
            {workExperienceDetails.map((workExperience, index) => (
              <div
                className="work-experience-parent"
                key={"work-experience" + index}
              >
                <ResumeHeading
                  heading={workExperience.title}
                  subHeading={workExperience.company}
                  descriptionHeader={workExperience.subHeading}
                  description={workExperience.description}
                  fromDate={workExperience.duration.fromDate}
                  toDate={workExperience.duration.toDate}
                />
              </div>
            ))}
          </div>
        </FadeTransition>
      )}

      {currentContentIndex === 3 && (
        <FadeTransition key="content-3">
          <div className="resume-screen-container interest-container">
            {interestDetails.map((interest, index) => (
              <div className="interest-parent" key={"interest" + index}>
                <ResumeHeading
                  heading={interest.title}
                  description={interest.description}
                />
              </div>
            ))}
          </div>
        </FadeTransition>
      )}
    </AnimatePresence>
  );
};

export default ResumeDetails;
