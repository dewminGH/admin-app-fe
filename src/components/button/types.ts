import { ButtonTypes } from "./enum";

export interface IButtonProps {
  buttonType: ButtonTypes;
  title?: string;
}

export interface IButtonStyleProps {
  buttonType: ButtonTypes;
}
