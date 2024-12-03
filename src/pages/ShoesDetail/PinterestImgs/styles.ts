import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1010px;
  margin: 0 auto;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;

  .header-slide {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    .swipe {
      background: black;
      color: white;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      max-width: 710px;

      text-transform: uppercase;
      margin-top: 115px;
      position: relative;
      align-items: center;
      clip-path: polygon(93% 0%, 100% 32%, 100% 100%, 1% 100%, 1% 1%);
      padding: 31px 42px;
      box-sizing: border-box;

      img {
        width: 53px;
        margin-right: 32px;
      }

      p {
        font-size: 41px;
        letter-spacing: 4px;
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
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 23px;

    .pinterest-img {
      border-radius: 30px;
      img {
        width: 100%;
        width: 487px;
        height: 865px;
        object-fit: cover;
        border-radius: 30px;
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
