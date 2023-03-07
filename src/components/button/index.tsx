import * as Styled from "./styles";
import { IButtonProps } from "./types";

const CustomButton: React.FC<IButtonProps> = ({ title, buttonType }) => {
  return <Styled.StyledButton buttonType={buttonType}>{title}</Styled.StyledButton>;
};

export default CustomButton;
