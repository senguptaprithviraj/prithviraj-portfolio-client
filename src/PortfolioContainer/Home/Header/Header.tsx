import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import React, { ReactElement, useState } from "react";
import {
  GET_SCREEN_INDEX,
  TOTAL_SCREENS,
  TotalScreenType,
} from "../../../utilities/commonUtils";
import type { ScreenType } from "../../../utilities/scrollService";
import ScrollService from "../../../utilities/scrollService";
import logo from "../../../assets/myLogo.png";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const getHeaderOptions = (): ReactElement[] => {
    return TOTAL_SCREENS.map((screen, i) => {
      return (
        <div
          key={screen.screenName}
          className={getHeaderOptionsClass(i, selectedScreen)}
          onClick={() => switchScreen(i, screen)}
        >
          <span>{screen.screenName}</span>
          {i < TOTAL_SCREENS.length - 1 && (
            <span className="screen-name-separator">|</span>
          )}
        </div>
      );
    });
  };

  const switchScreen = (index: number, screen: TotalScreenType) => {
    let screenComponent = document.getElementById(screen.screenName);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  const updateCurrentScreen = (currentScreen: ScreenType) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscripion =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-menu-container">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <img className="header-logo-image" src={logo} alt="logo" />
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// helper function

const getHeaderOptionsClass = (
  index: number,
  selectedScreen: number
): string => {
  let classes = "header-option";
  if (index < TOTAL_SCREENS.length - 1) {
    classes += " header-options-separator";
  }

  if (selectedScreen === index) {
    classes += " selected-header-option";
  }
  return classes;
};
