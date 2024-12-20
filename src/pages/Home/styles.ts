import styled from "styled-components";
import HomeBackground from "../../assets/imgs/backgrounds/bk_page1.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }

  .start {
    margin-top: 35px;
    background: black;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 603px;
    overflow: hidden;
    position: relative;
    clip-path: polygon(100% 0, 100% 60%, 91% 100%, 1% 100%, 0 0);
    letter-spacing: 10px;

    button {
      font-family: DmCd, "sans-serif";
      font-size: 70px;
      padding: 0;
      border: 0;
      background: none;
      display: flex;
      align-items: baseline;
    }
  }

  .try {
    margin-top: 44px;
    font-family: BkCd, "sans-serif";
    font-size: 63px;
    max-width: 603px;
    text-align: center;
    letter-spacing: 12px;
  }
`;
