import styled from "styled-components";

export const AppContainerStyle = styled.div`

    .navbar-fixed {
      position: fixed;
      width: 100%;
      margin-top: -3rem;
      z-index: 10;
    }

    .scroll-section {
      margin-top: 3rem;
      z-index: 2;
    } 

    @media (max-width: 700px){
      .navbar-fixed {
        margin-top: -6rem;
        background-color: white;

      }
      .scroll-section {
        margin-top: 6rem;
      }
    }
`