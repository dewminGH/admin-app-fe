import styled from "styled-components";
import { IButtonStyleProps } from "./types";
import { Button } from "@mui/material";
import { ButtonTypes } from "./enum";

export const StyledButton = styled(Button)<IButtonStyleProps>`
${({ buttontype }) => {
  let styles;
  switch (buttontype) {
    case ButtonTypes.LoginButton:
      styles = {
        height: "60px",
        width: "340px",
      };
      break;
    case ButtonTypes.ModalButton:
      styles = {
        height: "40px",
        width: "200px",
      };
      break;
    default:
      styles = {};
  }
  return styles;
}}
  margin-top: 25px !important;
  margin-bottom: 25px !important;
  border-radius: 10px !important;
  background-color: #f150ff !important;
  border: 3px solid #d94cfd !important;
  color: #ffffff !important;
  font-size: 14px !important;
  font-weight: 600 !important;

  &:hover {
    backgroundColor: "#D94CFD !important",
  },
`;
