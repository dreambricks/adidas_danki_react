import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  .logo {
    margin-top: 67px;
    max-width: 166px;
  }

  .shoes-list {
    margin-top: 76px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    gap: 36px;

    img {
      width: 100%;
      max-width: 473px;
      height: 473px;
      object-fit: contain;
    }
  }
`;
