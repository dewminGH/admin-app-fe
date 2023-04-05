import React from "react";

export interface IModalProps {
  title: string;
  content: React.ReactNode;
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  buttons?: React.ReactNode;
}
