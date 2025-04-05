import styled from "styled-components";
import { common_colors } from "../../../common/assets/colors";

export const ExperienceContainerStyle = styled.div`
  margin-top: 5rem;
  
  h2 {
    color: ${common_colors.text_color_gray};
    margin-bottom: 6rem;
    
  }

  .container{

    border-left: 4px solid ${common_colors.bg_color_dark_gray};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    
    .item {
      background-color: ${common_colors.bg_color_gray};
      padding: 1rem;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${common_colors.text_color_42};
        
        h3{
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .active{
          padding: 3px;
          border-radius: 50%;
          background-color: ${common_colors.active_color_green};
          width: min-content;
        }
      }

      .logo {
        width: 20%;
        margin-top: 0.5rem;
      }

    }

  }

  @media (max-width: 900px) {
    .container {
      width: 80%;
    }
  }
  @media (max-width: 700px) {
      .container {
        width: 100%;

        
        .item{
          .header{
            display: block;

            h3{
              margin-bottom: 1rem;
            }
          }

          .logo {
            margin-top: 1rem;
            width: 35%;
          }
        }
      }
  }
`