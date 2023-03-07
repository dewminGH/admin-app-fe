import { TextFieldTypes } from "./enum";
import * as Styled from "./styles";
import { ITextFieldProps } from "./types";

const CustomTextField: React.FC<ITextFieldProps> = ({ type, placeHolder }) => {
  return (
    <Styled.CustomTextField
      type={type}
      placeholder={placeHolder}
      sx={{
        "& .Mui-focused": {
          outline: "none",
          boxShadow: "none !important",
          borderColor: "transparent !important",
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: `${type === TextFieldTypes.LoginTextField ? "#F150FF  !important" : "transparent"}`,
          },
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: `${type === TextFieldTypes.LoginTextField ? "#D94CFD  !important" : "transparent"}`,
        },
      }}
    />
  );
};

export default CustomTextField;
