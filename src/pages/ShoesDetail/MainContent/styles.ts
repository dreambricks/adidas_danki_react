import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  color: black;
  padding-bottom: 83px;

  .shoes-slide {
    width: 958px;
    height: 866px;

    img {
      width: 100%;
      display: block;
      max-width: 957px;
      height: 709px;
      object-fit: cover;
    }

    .shoes {
      overflow: hidden;

      p {
        border: 1px solid black;
        padding: 0 49px;
        position: relative;
        font-size: 81px;
        clip-path: polygon(100% 0, 100% 60%, 91% 100%, 1% 100%, 0 0);

        &::after {
          content: "";
          position: absolute;
          width: 79px;
          height: 80px;
          background: white;
          border-left: 1px solid black;
          border-top: 1px white;
          border-bottom: 1px solid white;
          transform: rotate(45deg);
          right: -41px;
          bottom: -41px;
        }
      }
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000%;
    max-width: 876px;
    margin: 0 auto;
    margin-top: 100px;
    gap: 60px;

    p {
      font-size: 52px;
      font-family: DmCd, "sans-serif";
      letter-spacing: 5px;
      padding-top: 20px;
    }
  }

  .describe {
    width: 100%;
    max-width: 844px;
    margin-top: 132px;

    p {
      font-family: BkCd, "sans-serif";
      font-size: 36px;
      text-transform: uppercase;

      span {
        font-family: DmCd, "sans-serif";
      }
    }
  }

  .other-colors {
    margin-top: 100px;

    p {
      max-width: 843px;
      margin: 0 auto;
      font-family: DmCd, "sans-serif";
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .shoes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      padding: 0 20px;

      img {
        width: 100%;
        max-width: 316px;
        height: 316px;
        object-fit: cover;
      }
    }
  }

  .swipe {
    background: black;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    width: 824px;
    text-transform: uppercase;
    gap: 32px;
    margin-top: 115px;
    position: relative;
    align-items: center;
    clip-path: polygon(93% 0%, 100% 32%, 100% 100%, 1% 100%, 1% 1%);
    div {
      display: flex;
      flex-direction: column;

      p:first-child {
        font-family: DmCd, "sans-serif";
        font-size: 39px;
        letter-spacing: 5px;
      }
      p:last-child {
        font-family: BkCd, "sans-serif";
        font-size: 23px;
        letter-spacing: 1px;
      }
    }
  }

  .pinterest {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    gap: 17px;
    margin-top: 56px;
    padding: 0 15px;

    img {
      width: 100%;
      max-width: 275px;
      height: 366px;
      object-fit: cover;
      border-radius: 30px;
    }
  }

  .separator {
    width: 100%;
    max-width: 955px;
    height: 3px;
    background: black;
    margin-top: 56px;
  }

  .other-shoes {
    width: 100%;
    margin-top: 76px;

    h5 {
      font-size: 35px;
      width: 100%;
      max-width: 804px;
      margin: 0 auto;
      font-family: DmCd, "sans-serif";
      letter-spacing: 1px;
    }

    .options-container {
      margin-top: 57px;
      height: 200px;

      background: black;

      .wrapper-items {
        width: 100%;
        max-width: 804px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 auto;
        gap: 48px;
        color: white;

        a {
          text-decoration: none;
          color: white;
        }

        .shoes {
          margin-top: -40px;
          p {
            font-size: 20px;
            font-family: BkCd, "sans-serif";
          }

          img {
            width: 100%;
            max-width: 240px;
            height: 130px;
            object-fit: cover;
          }
        }
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
  }
`;
