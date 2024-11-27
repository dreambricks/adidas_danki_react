import styled from "styled-components";

export const Container = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 315px;
  height: 100%;
  padding-left: 130px;

  color: black;

  .welcome {
    font-family: DmCp, "sans-serif";
    font-size: 206px;
  }

  .dive-in {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 156px;

    p {
      font-family: DmCp, "sans-serif";
      font-size: 73px;
      width: 490px;
      letter-spacing: 14px;
    }
  }

  .describe {
    margin-top: 156px;
    font-family: BkCd, "sans-serif";
    font-size: 35px;
    max-width: 900px;
    letter-spacing: 8px;

    span {
      font-family: DmCd, "sans-serif";
      font-size: 35px;
    }
  }

  button {
    font-family: DmCd, "sans-serif";
    font-size: 55px;
    border-radius: 0;
    width: 571px;
    padding: 30px 0 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 252px;
    position: relative;
    clip-path: polygon(100% 0, 100% 60%, 91% 100%, 1% 100%, 0 0);
    letter-spacing: 13px;
  }
`;
