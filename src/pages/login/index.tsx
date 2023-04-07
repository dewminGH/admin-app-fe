import * as Styled from "./styles";
import CoverLogo from "../../assets/images/loginBackground.png";
import CustomTextField from "../../components/textfield";
import CustomButton from "../../components/button";
import ImageFrame from "../../components/imageframe";
import { FormEvent, useEffect, useState } from "react";
import { ButtonTypes } from "../../components/button/enum";
import { TextFieldTypes } from "../../components/textfield/enum";
import { useNavigate } from "react-router-dom";
import StyledModal from "../../components/modal";
import { initAuth, userConfirmRegister, getUserTokens, userRegister } from "../../services";
import jwtDecode from "jwt-decode";
import { IIDTokenDecode } from "./types";
import StyledAlerts from "../../components/alert";
import { IAlertTypes } from "../../components/alert/types";

const LoginPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const MetaTextClickHandler = (path: string) => {
    navigate(path);
    if (window.location.pathname === "/register") setRegister(true);
    else setRegister(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.location.pathname === "/register") setRegister(true);
    else setRegister(false);
  });

  const loginUser = async () => {
    const params = {
      username: email,
      password,
    };
    await initAuth(params);

    const token = getUserTokens().IdToken;
    if (token !== null) {
      const decode: IIDTokenDecode = jwtDecode(token);
      if (decode.profile === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
    }
  };

  const openDialogBox = () => {
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 4500);
  };

  const registerUser = async () => {
    if (password === confirmPassword) {
      setOpen(true);
      await userRegister({ email, password, name });
    } else {
      setMessage("password miss matched");
      openDialogBox();
    }
  };

  const onClickVerify = async () => {
    await userConfirmRegister(otp);
    setOpen(false);
  };

  const onClick = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    register === true ? await registerUser() : await loginUser();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledAlerts type={IAlertTypes.Error} message={message} openAlert={openAlert} setVisible={setOpenAlert} />
      <Styled.LoginContainer>
        <Styled.LoginImageWrapper>
          <ImageFrame src={CoverLogo} />
        </Styled.LoginImageWrapper>
        <Styled.LoginContentWrapper>
          <Styled.LoginTitle>{register === true ? "Create an account" : "Login to account"}</Styled.LoginTitle>
          <Styled.LoginContentLabel width={540} height={25}>
            User Email
          </Styled.LoginContentLabel>
          <CustomTextField
            type={TextFieldTypes.LoginTextField}
            placeHolder="Enter your email"
            onChange={({ target }) => setEmail(target.value)}
          />
          {register === true ? (
            <>
              <Styled.LoginContentLabel width={540} height={25}>
                Full Name
              </Styled.LoginContentLabel>
              <CustomTextField
                type={TextFieldTypes.LoginTextField}
                placeHolder="Enter your name"
                onChange={({ target }) => setName(target.value)}
              />
            </>
          ) : null}
          <Styled.LoginContentLabel width={540} height={25}>
            Password
          </Styled.LoginContentLabel>
          <CustomTextField
            type={TextFieldTypes.PasswordTextField}
            placeHolder="Enter password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          {register === true ? (
            <>
              <Styled.LoginContentLabel width={540} height={25}>
                Confirm Password
              </Styled.LoginContentLabel>
              <CustomTextField
                type={TextFieldTypes.PasswordTextField}
                placeHolder="confirm password"
                onChange={({ target }) => {
                  setConfirmPassword(target.value);
                }}
              />
            </>
          ) : null}
          <Styled.LoginButtonWrapper>
            <CustomButton
              buttontype={ButtonTypes.LoginButton}
              title={register === true ? "Register" : "Sign In"}
              onClick={onClick}
            />
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
        {open ? (
          <StyledModal
            open={true}
            handleClose={handleClose}
            title="Verify Your CODE"
            content={
              <CustomTextField
                type={TextFieldTypes.ModalTextField}
                placeHolder="enter your otp"
                onChange={({ target }) => setOtp(target.value)}
              />
            }
            buttons={
              <Styled.ModalButtonWrapper>
                <CustomButton buttontype={ButtonTypes.ModalButton} title="Verify" onClick={onClickVerify} />
              </Styled.ModalButtonWrapper>
            }
          />
        ) : null}
      </Styled.LoginContainer>
    </>
  );
};

export default LoginPage;
