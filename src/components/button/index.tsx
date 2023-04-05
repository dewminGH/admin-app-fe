import * as Styled from "./styles";
import { IButtonProps } from "./types";

const CustomButton: React.FC<IButtonProps> = ({ title, buttontype, type, onClick }) => {
  return (
    <Styled.StyledButton buttontype={buttontype} type={type} onClick={onClick}>
      {title}
    </Styled.StyledButton>
  );
};

export default CustomButton;
