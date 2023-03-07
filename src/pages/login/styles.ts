import styled from "styled-components";
import { ILoginLabelProps, IMetaTextStyleProps } from "./types";

export const LoginContainer = styled.div`
  display: flex;
`;

export const LoginImageWrapper = styled.div`
  display: flex;
`;

export const LoginContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const LoginContentLabel = styled.div<ILoginLabelProps>`
  ${({ width, height }) => {
    return {
      width: `${width}px`,
      height: `${height}px`,
    };
  }}
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  justify-content: flex-start;
  gap: 250px;
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 32px;
  padding-bottom: 70px;
`;

export const LoginMetaText = styled.div<IMetaTextStyleProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  text-align: left;
  width: fit-content;
  padding-left: 5px;
  cursor: pointer;
  ${({ fontWeight, color }) => {
    return {
      color: color ? color : "rgba(0, 0, 0, 0.5)",
      fontWeight: fontWeight ? fontWeight : 600,
    };
  }}
`;

export const LoginMetaTextWrapper = styled.div`
  display: flex;
`;
