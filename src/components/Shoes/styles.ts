import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .shoes-name {
    position: relative;
    overflow: hidden;

    p {
      font-family: DmCd, "sans-serif";
      padding-top: 20px;
      padding-left: 20px;
      font-size: 40px;
      color: black;
      text-transform: uppercase;
      border: 1px solid black;
    }

    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background: white;
      border-left: 1px solid black;
      border-top: 1px white;
      border-bottom: 1px solid white;
      transform: rotate(45deg);
      right: -10px;
      bottom: -10px;
      z-index: 2;
    }
  }
`;
