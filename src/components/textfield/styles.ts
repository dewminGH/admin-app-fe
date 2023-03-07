import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { ITextFieldStyleProps } from "./types";
import { TextFieldTypes } from "./enum";

export const CustomTextField = styled(TextField)<ITextFieldStyleProps>`
  ${({ type }) => {
    if ((type = TextFieldTypes.LoginTextField))
      return {
        width: "540px",
        height: "65px",
        paddingBottom: "15px !important",
      };

    return null;
  }}
`;
