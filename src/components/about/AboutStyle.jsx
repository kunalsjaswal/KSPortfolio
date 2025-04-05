import styled from "styled-components";
import { common_colors } from "../../common/assets/colors";


export const AboutStyleDiv = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;

  h2 {
    color: ${common_colors.text_color_gray};
    margin-bottom: 3rem;
  }

  p {
    color: ${common_colors.text_color_gray};
    width: 90%;
  }

  .social-tags {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    align-items: center;

    img {
      width: 2rem;
    }

    div{
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .linkdin-class{
      width: 2.5rem;
    }

    .gmail-class {
      background-color: ${common_colors.bg_color_gray};
      padding: 0.5rem 1rem;
      border-radius: 5px;

      img {
        width: 1.5rem;
      }

      span{
        color: ${common_colors.text_color_gray};
      }
    }
  }

  @media (max-width: 700px){
    p {
      width: 100%;
    }

    .social-tags {
      display: block;

      .linkdin-class{
        margin-right: 1rem;
      }

      .gmail-class {
        width: fit-content;
        margin-bottom: 1rem;
      }
    }
  }
`