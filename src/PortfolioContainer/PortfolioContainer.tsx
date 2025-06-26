import { TOTAL_SCREENS } from "../utilities/commonUtils";

const PortfolioContainer = () => {
  return <div className="portfolio-container">{mapAllScreens()}</div>;
};

export default PortfolioContainer;

// helper functions
const mapAllScreens = () => {
  return TOTAL_SCREENS.map((screen) => {
    if (screen?.component) {
      return (
        <screen.component
          // @ts-ignore
          id={screen.screenName}
          key={screen.screenName}
          screenName={screen.screenName}
        />
      );
    } else {
      return <div key={screen.screenName}></div>;
    }
  });
};
