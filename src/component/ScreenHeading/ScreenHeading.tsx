import "./ScreenHeading.css";

type ScreenHeadingPropType = {
  title: string;
  highlightedTitle?: string;
  subHeading?: string;
};

const ScreenHeading = ({
  title,
  highlightedTitle,
  subHeading,
}: ScreenHeadingPropType) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{title}</span>
        {highlightedTitle && (
          <span className="highlighted-screen-heading">{highlightedTitle}</span>
        )}
      </div>

      {subHeading ? (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      ) : null}

      <div className="heading-separator">
        <div className="separator-line">
          <div className="separator-blob">
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
