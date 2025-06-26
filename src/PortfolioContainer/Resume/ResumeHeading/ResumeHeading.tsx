import "./ResumeHeading.css";

type ResumeHeadingProps = {
  heading: string;
  subHeading?: string;
  fromDate?: string;
  university?: string;
  toDate?: string;
  descriptionHeader?: string;
  description?: string;
};

const ResumeHeading = ({
  heading,
  subHeading,
  university,
  fromDate,
  toDate,
  descriptionHeader,
  description,
}: ResumeHeadingProps) => {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="resume-title-section">
          <div className="heading-bullet"></div>
          <span>{heading ? heading : ""}</span>
        </div>

        {fromDate && toDate ? (
          <div className="heading-date">{fromDate + "-" + toDate}</div>
        ) : (
          <div></div>
        )}
      </div>
      {subHeading && (
        <div className="resume-sub-heading">
          <span>{subHeading}</span>
        </div>
      )}
      {descriptionHeader && (
        <div className="resume-heading-description-header">
          <span>{descriptionHeader}</span>
        </div>
      )}

      <div className="resume-heading-description">
        <span>{description ? description : ""}</span>
      </div>
    </div>
  );
};

export default ResumeHeading;
