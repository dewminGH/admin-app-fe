import styled from "styled-components";
import { IButtonStyleProps } from "./types";
import { Button } from "@mui/material";
import { ButtonTypes } from "./enum";

export const StyledButton = styled(Button)<IButtonStyleProps>`
  ${({ buttonType }) => {
    if (buttonType === ButtonTypes.LoginButton)
      return {
        marginTop: "25px !important",
        marginBottom: "25px !important",
        width: "340px",
        height: "60px",
        borderRadius: "10px !important",
        backgroundColor: "#F150FF !important",
        border: "3px solid #D94CFD !important",
        color: "#FFFFFF !important",
        fontSize: "14px !important",
        fontWeight: "600 !important",
        ":hover": {
          backgroundColor: "#D94CFD !important",
        },
      };
  }}
`;
