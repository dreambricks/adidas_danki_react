import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  position: relative;
  margin: auto;

  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  color: black;
  padding-bottom: 83px;

  .mySlides {
    display: none;
  }

  .mySlides.active {
    display: block;
    width: 100%;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
