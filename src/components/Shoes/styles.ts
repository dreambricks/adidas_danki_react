import styled from "styled-components";
import { Link } from "react-router";

interface StyleProps {
  big: boolean;
}

export const Container = styled(Link)<StyleProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .shoe-container {
    position: relative;
    margin-top: 1px;
    background: black;
    padding: 1px;
    clip-path: polygon(
      0 0,
      100% 1%,
      100% 0%,
      100% 54%,
      87% 100%,
      0% 100%,
      0% 82%,
      0% 29%
    );
  }

  .shoes-name {
    position: relative;
    background: white;
    padding: ${({ big }) => (big ? " 20px 20px" : "0")};

    clip-path: polygon(
      0 0,
      100% 1%,
      100% 0%,
      100% 54%,
      87% 100%,
      0% 100%,
      0% 82%,
      0% 29%
    );

    p {
      font-family: BkCd, "sans-serif";
      padding-top: 20px;
      padding-left: 20px;
      font-size: 40px;
      color: black;
      text-transform: uppercase;
      outline: none;

      strong {
        font-family: DmCd, "sans-serif";
      }
    }
  }
`;

export const ContainerNoLink = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .shoe-container {
    position: relative;
    margin-top: 1px;
    background: black;
    padding: 1px;
    clip-path: polygon(
      0 0,
      100% 1%,
      100% 0%,
      100% 54%,
      87% 100%,
      0% 100%,
      0% 82%,
      0% 29%
    );
  }

  .shoes-name {
    position: relative;
    background: white;
    padding: ${({ big }) => (big ? " 20px 20px" : "0")};

    clip-path: polygon(
      0 0,
      100% 1%,
      100% 0%,
      100% 54%,
      87% 100%,
      0% 100%,
      0% 82%,
      0% 29%
    );

    p {
      font-family: BkCd, "sans-serif";
      padding-top: 20px;
      padding-left: 20px;
      font-size: 40px;
      color: black;
      text-transform: uppercase;
      outline: none;

      strong {
        font-family: DmCd, "sans-serif";
      }
    }
  }
`;
