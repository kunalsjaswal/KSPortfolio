import styled from "styled-components";
import { common_colors } from "../../../common/assets/colors";

export const SkillsContainerStyle = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  h2 {
    color: ${common_colors.text_color_gray};
    margin-bottom: 6rem;
  }

  .container {
    display: grid;
    grid-template-columns: 40% 60%;

    .skills-list{
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;

      .select-skill-circle {
        width: 8rem;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 50%;
        background-color: ${common_colors.bg_color_gray};
        cursor: pointer;
      }
    }

    .skill-detail {
      width: 90%;
      margin-left: 10%;

      .detail-head {
        background-color: ${common_colors.bg_color_gray};
        padding: 1rem;

        h2{
          margin-bottom: 1rem;
        }

        .skill-tags {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;

          .tag-label {
            font-size: 0.8rem;
            font-weight: 500;
            padding: 0.4rem 1rem ;
            border-radius: 15px;
            color: ${common_colors.text_color_gray};
            background-color: ${common_colors.bg_tag_color};
          }
        }
      }

      .detail-body {
        margin-top: 2rem;
        color: ${common_colors.text_color_42};
      }
    }
  }

  @media (max-width: 900px){
    .container {
      display: block;

      .skills-list {
        width: 70%;
      }

      .skill-detail {
        margin: 0;
        width: 100%;
        margin-top: 4rem;
      }
    }
  }
  @media (max-width: 700px){
    .container {
      display: block;

      .skills-list {
        width: 100%;
      }

      .skill-detail {
        margin-top: 4rem;

        .detail-head {
          padding: 1rem;

          .skill-tags {
            .tag-label {
              border-radius: 10px;
            }
          }
        }

        .detail-body {
          margin-top: 2rem;
          color: ${common_colors.text_color_42};
        }
      }
    }
  }
`;
