import { Subject } from "rxjs";

export type ScreenType = {
  screenInView: string;
};

export type FadeInScreenType = {
  fadeInScreen: string;
};

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadcaster = new Subject<ScreenType>();
  static currentScreenFadeIn = new Subject<FadeInScreenType>();

  scrollToSpecificSection = (screenName: string) => {
    let scrollToScreen = document.getElementById(screenName);
    if (!scrollToScreen) return;
    scrollToScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (element: HTMLElement, type: string) => {
    let rec = element.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    switch (type) {
      case "partial":
        let partiallyVisible =
          elementTop < window.innerHeight && elementBottom >= 0;
        return partiallyVisible;
      case "complete":
        let completelyVisible =
          elementTop >= 0 && elementBottom <= window.innerHeight;
        return completelyVisible;
      default:
        return false;
    }
  };
}
