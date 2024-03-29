import { FormEvent } from "react";
import { ButtonTypes } from "./enum";

export interface IButtonProps {
  buttontype: ButtonTypes;
  title?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (event: FormEvent<HTMLButtonElement>) => void;
  sx?: object;
}

export interface IButtonStyleProps {
  buttontype: ButtonTypes;
}
