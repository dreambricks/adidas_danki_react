import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  position: relative;
  margin: auto;
  overflow: hidden;

  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  color: black;
  padding-bottom: 83px;

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 500ms ease-in-out;
  }
  .slide-exit {
    transform: translate(0%, -100%);
  }
  .slide-exit-active {
    transform: translate(-100%, -100%);
    transition: transform 500ms ease-in-out;
  }

  .mySlides {
    display: none;
    position: relative;
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
