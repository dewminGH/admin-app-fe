import { TextFieldTypes } from "./enum";

export interface ITextFieldProps {
  type: TextFieldTypes;
  placeHolder?: string;
}

export interface ITextFieldStyleProps {
  type: TextFieldTypes;
}
