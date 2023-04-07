/* eslint-disable */
import * as React from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import { IAlertProps, IAlertTypes } from "./types";
import { useEffect, useState } from "react";

const StyledAlerts: React.FC<IAlertProps> = ({ type, message, openAlert, setVisible }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(openAlert);
    }, 1000);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, [openAlert]);

  useEffect(() => {
    if (open === false) setVisible(false);
  }, [open]);

  const RenderAlert = () => {
    let JSX;
    switch (type) {
      case IAlertTypes.Error:
        JSX = <Alert severity="error">{message}</Alert>;
        break;
      case IAlertTypes.Info:
        JSX = <Alert severity="info">{message}</Alert>;
        break;
      case IAlertTypes.Success:
        JSX = <Alert severity="success">{message}</Alert>;
        break;
      case IAlertTypes.warning:
        JSX = <Alert severity="warning">{message}</Alert>;
        break;
      default:
        null;
    }
    return JSX;
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>{RenderAlert()}</Collapse>
    </Box>
  );
};

export default StyledAlerts;
