import styled from "styled-components";
import { IImageStyleProps } from "./types";

export const ImageContainer = styled.img<IImageStyleProps>`
  ${({ width, height }) => {
    return {
      width: `${width ? `${width}px` : "30vw"}`,
      height: `${height ? `${height}px` : "100vh"}`,
    };
  }}

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
