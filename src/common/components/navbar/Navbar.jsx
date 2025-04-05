import React from "react";
import { NavbarContainerStyle } from "./NavbarStyle";
import BasicMenu from "../menu/Menu";
import {
  NAVBAR_DETAILS,
  NAVBAR_MENU_DETAILS,
} from "../../constants/NavbarConstants";
import { Button } from "@mui/material";

const Navbar = ({
  onAboutClick,
  onContactClick,
  onExperienceClick,
  onSkillsClick,
  onProjectClick,
}) => {
  return (
    <NavbarContainerStyle>
      <div className="navbar-container">
        <h2>{NAVBAR_DETAILS.title}</h2>
        <div className="menu-tab-items">
          <Button
            variant="text"
            className="menu-tab-btn"
            onClick={onAboutClick}
          >
            {NAVBAR_DETAILS.tab.about}
          </Button>
          <BasicMenu
            menuDetail={NAVBAR_MENU_DETAILS}
            onExperienceClick={onExperienceClick}
            onSkillsClick={onSkillsClick}
            onProjectClick={onProjectClick}
          />
          <Button
            variant="text"
            className="menu-tab-btn"
            onClick={onContactClick}
          >
            {NAVBAR_DETAILS.tab.contact}
          </Button>
        </div>
      </div>
    </NavbarContainerStyle>
  );
};

export default Navbar;
