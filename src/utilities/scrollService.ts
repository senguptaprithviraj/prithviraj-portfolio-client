import { Subject } from "rxjs";
import { TOTAL_SCREENS } from "./commonUtils";

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

  // constructor() {
  //   window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  // }

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

  // checkCurrentScreenUnderViewport = (event: Event) => {
  //   if (!event || Object.keys(event).length < 1) return;
  //   if (TOTAL_SCREENS) {
  //     TOTAL_SCREENS.forEach((screen) => {
  //       let screenFromDOM = document.getElementById(screen.screenName);
  //       if (!screenFromDOM) return;

  //       let fullyVisible = this.isElementInView(screenFromDOM, "complete");
  //       let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

  //       if (fullyVisible || partiallyVisible) {
  //         if (partiallyVisible && !screen.alreadyRendered) {
  //           ScrollService.currentScreenFadeIn.next({
  //             fadeInScreen: screen.screenName,
  //           });
  //           screen.alreadyRendered = true;
  //         }
  //         if (fullyVisible) {
  //           ScrollService.currentScreenBroadcaster.next({
  //             screenInView: screen.screenName,
  //           });
  //         }
  //       }
  //     });
  //   }
  // };
}
