import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { ITextFieldStyleProps } from "./types";
import { TextFieldTypes } from "./enum";

export const CustomTextField = styled(TextField)<ITextFieldStyleProps>`
  ${({ type }) => {
    let styles;
    switch (type) {
      case TextFieldTypes.LoginTextField:
        styles = {
          width: "540px !important",
          height: "65px !important",
          paddingBottom: "15px !important",
        };
        break;
      case TextFieldTypes.ModalTextField:
        styles = {
          width: "395px",
          height: "65px",
          paddingBottom: "15px !important",
        };
        break;
      default:
        styles = {};
    }
    return styles;
  }}
`;
