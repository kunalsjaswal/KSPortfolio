import styled from "styled-components";
import { navbar_colors } from "../../assets/colors";

export const NavbarContainerStyle = styled.div`
  .navbar-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
  }

  h2{
    color: ${navbar_colors.dark_menu_tab_color};
    padding: 0.5rem;
    border-bottom-right-radius: 1rem;
    background-color: white;
  }

  .menu-tab-btn {
    color: ${navbar_colors.dark_menu_tab_color};
    font-weight: bold;
  }

  .menu-tab-items {
    display: flex;
    align-items: center;
    flex-grow: 3;
    justify-content: flex-end;
    padding-right: 2rem;
    column-gap: 2rem;
  }

  .menu-popup {
    box-shadow: none;
    background-color: transparent;
  }

  @media (max-width: 700px) {

    .navbar-container {
      margin-bottom: 2rem;
      display: block;
    }

    h2 {
      text-align: center;
    }

    .menu-tab-items {
      display: flex;
      justify-content: center;
      padding-right: 0rem;
      margin-top: 1rem;
    }
  }
`