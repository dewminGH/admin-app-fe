import * as Styled from "./styles";
import CoverLogo from "../../assets/images/loginBackground.png";
import CustomTextField from "../../components/textfield";
import CustomButton from "../../components/button";
import ImageFrame from "../../components/imageframe";
import { useEffect, useState } from "react";
import { ButtonTypes } from "../../components/button/enum";
import { TextFieldTypes } from "../../components/textfield/enum";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(false);
  const navigate = useNavigate();

  const MetaTextClickHandler = (path: string) => {
    navigate(path);
    if (window.location.pathname === "/register") setRegister(true);
    else setRegister(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/register") setRegister(true);
  }, []);

  return (
    <Styled.LoginContainer>
      <Styled.LoginImageWrapper>
        <ImageFrame src={CoverLogo} />
      </Styled.LoginImageWrapper>
      <Styled.LoginContentWrapper>
        <Styled.LoginTitle>{register === true ? "Create an account" : "Login to account"}</Styled.LoginTitle>
        <Styled.LoginContentLabel width={540} height={25}>
          User Name
        </Styled.LoginContentLabel>
        <CustomTextField type={TextFieldTypes.LoginTextField} placeHolder="Enter your username" />
        <Styled.LoginContentLabel width={540} height={25}>
          Password
        </Styled.LoginContentLabel>
        <CustomTextField type={TextFieldTypes.LoginTextField} placeHolder="Enter password" />
        {register === true ? (
          <>
            <Styled.LoginContentLabel width={540} height={25}>
              Confirm Password
            </Styled.LoginContentLabel>
            <CustomTextField type={TextFieldTypes.LoginTextField} placeHolder="confirm password" />
          </>
        ) : null}
        <Styled.LoginButtonWrapper>
          <CustomButton buttonType={ButtonTypes.LoginButton} title={register === true ? "Register" : "Sign In"} />
        </Styled.LoginButtonWrapper>
        <Styled.LoginMetaTextWrapper>
          <Styled.LoginMetaText>{register === true ? "Already" : "Don`t"} have an account?</Styled.LoginMetaText>
          <Styled.LoginMetaText
            color="#000000"
            onClick={() => MetaTextClickHandler(register === true ? "/" : "/register")}
          >
            {register === true ? "Sign In" : "Register"}
          </Styled.LoginMetaText>
        </Styled.LoginMetaTextWrapper>
      </Styled.LoginContentWrapper>
    </Styled.LoginContainer>
  );
};

export default LoginPage;
