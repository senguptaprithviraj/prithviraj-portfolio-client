import AboutMe from "../PortfolioContainer/AboutMe";
import ContactMe from "../PortfolioContainer/ContactMe";
import Home from "../PortfolioContainer/Home/Home";
import ProjectShowCase from "../PortfolioContainer/ProjectShowCase";
import Resume from "../PortfolioContainer/Resume";

export type ScreenComponentType = {
  screenName: string;
  id: string;
};

export type TotalScreenType = {
  screenName: string;
  component: React.FC<ScreenComponentType>;
  alreadyRendered?: boolean;
};

export const TOTAL_SCREENS: Array<TotalScreenType> = [
  {
    screenName: "Home",
    component: Home,
  },
  {
    screenName: "About Me",
    component: AboutMe,
  },
  {
    screenName: "Resume",
    component: Resume,
  },
  {
    screenName: "Projects",
    component: ProjectShowCase,
  },
  {
    screenName: "Contact Me",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screenName: string) => {
  if (!screenName) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screenName === screenName) {
      return i;
    }
  }
  return -1;
};
