import { common_colors } from "../../../common/assets/colors";
import styled from "styled-components";

export const ProjectStyleDiv = styled.div`
  margin-bottom: 5rem;

  h2 {
    color: ${common_colors.text_color_gray};
    margin-bottom: 6rem;
  }

  .container {

    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-content: center;
    .project-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-left: 4px solid ${common_colors.text_color_gray};
      h3 {
        color: ${common_colors.text_color_gray};
      }

      .project-tab {
        background-color: ${common_colors.bg_color_gray};
        width: 20rem;
        padding: 1rem;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
      }

      .active-tab {
        width: 25rem;
      }

      a {
        
        width: fit-content;
        display: flex;
        margin-top:1.5rem;
        align-items: center;
        gap: 1rem;
        text-decoration: none;

        img {
          width: 1.3rem;
          border-radius: 5px;
          filter: invert(2);
        }
      }
    }

    .project-thumbnail {
      .desktop {
        width: 70%;
      }

      .tablet {
        width: 30%;

      }
    }

  }

  @media (max-width: 900px){
    .container {
        display: block;

        .project-thumbnail {
          margin-top: 2rem;
        }
    }
  }

  @media (max-width: 700px){
    .container {
        display: block;

      .project-list {

        h3 {
          font-size:0.9rem;
          font-weight:700;
        }

        .project-tab {
          width: 15rem;
        }

        .active-tab {
          width: 20rem;
        }

      }
    }
  }
`