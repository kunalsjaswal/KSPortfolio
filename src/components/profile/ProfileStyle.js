import styled from "styled-components";
import { profile_colors } from "../../common/assets/colors";

export const ProfileContainerStyle = styled.div`
  display : grid;
  grid-template-columns: 60% 40%;
  align-items: center;

  .left-content {
    width: 80%;
    margin: auto;
    display: block;
    
    h2{
      font-size: 3vw;
      margin-bottom: 1rem;
      color: ${profile_colors.text_color_gray};
    }

    p {
      font-size: 1.5vw;
      margin-bottom: 0.5rem;
      color: ${profile_colors.text_color_gray};
      text-align: justify;
    }

    .skills {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;

      .chip{
          padding: 0 0.4rem;
          color: ${profile_colors.text_color_gray};
          font-weight: 600;
        }
    }
  }

  .right-content {
    position: relative;
    img {
      position: relative;
      width: 75%;
      z-index: 3;
      border-radius: 5px;
    }
  }

  @media (max-width: 900px) {
    display: block;
    border: 0.1px solid transparent;
    .left-content {
      margin-top: 3rem;
      h2 {
        font-size: 5vw;
      }
      p {
        font-size: 3vw;
        margin-bottom: 2rem;
      }

      .skills {
        gap: 1rem;
      }
    }

    .right-content {
      text-align: center;
      margin-top: 2rem;

      img {
        width: 60%;
      }

      .bg{
        left: 20%;
        width: 60%;
      }
    }
  }

  @media (max-width: 600px) {

    .left-content {
      h2 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }

    .right-content {
      img {
        width: 80%;
      }

      .bg{
        left: 10%;
        width: 80%;
      }
    }
  }
`