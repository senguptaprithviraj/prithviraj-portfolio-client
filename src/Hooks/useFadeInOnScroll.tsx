import { useEffect } from "react";
import Animations from "../utilities/animations";
import ScrollService, { FadeInScreenType } from "../utilities/scrollService";

const useFadeInOnScroll = (id: string) => {
  useEffect(() => {
    const fadeInScreenHandler = (screen: FadeInScreenType) => {
      if (screen.fadeInScreen !== id) return;
      Animations.animations.fadeInScreen(id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [id]);
};

export default useFadeInOnScroll;
