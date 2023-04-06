import { ChangeEvent } from "react";
import { TextFieldTypes } from "./enum";

export interface ITextFieldProps {
  type: TextFieldTypes;
  placeHolder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextFieldStyleProps {
  type: TextFieldTypes;
}
