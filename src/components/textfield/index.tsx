import * as Styled from "./styles";
import { ITextFieldProps } from "./types";

const CustomTextField: React.FC<ITextFieldProps> = ({ type, placeHolder, onChange }) => {
  return (
    <Styled.CustomTextField
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      sx={{
        "& .Mui-focused": {
          outline: "none",
          boxShadow: "none !important",
          borderColor: "transparent !important",
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "#F150FF  !important",
          },
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#D94CFD  !important",
        },
      }}
    />
  );
};

export default CustomTextField;
