import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;

  .header-slide {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
    box-sizing: border-box;

    .swipe {
      background: black;
      color: white;
      display: flex;
      justify-content: flex-start;
      padding: 20px;
      width: 710px;
      text-transform: uppercase;
      gap: 32px;
      margin-top: 115px;
      position: relative;
      align-items: center;
      clip-path: polygon(93% 0%, 100% 32%, 100% 100%, 1% 100%, 1% 1%);
      max-width: 710px;
      padding: 31px 42px;

      img {
        width: 53px;
      }

      p {
        font-size: 41px;
        letter-spacing: 5px;
        font-family: BkCd, "sans-serif";
        padding-top: 20px;
        span {
          font-family: DmCd, "sans-serif";
        }
      }
    }

    img {
      width: 160px;
    }
  }

  .pinterest-imgs {
    padding: 0 40px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 36px;

    .pinterest-img {
      img {
        width: 100%;
      }
    }
  }

  .go-back {
    margin-top: 82px;
    background: transparent;
    font-family: DmCd, "sans-serif";

    color: black;
    display: flex;
    align-items: center;
    font-size: 35px;
    gap: 29px;
    border: none;
    margin: 0 auto;
    margin-top: 38px;
    outlined: none;
  }
`;
