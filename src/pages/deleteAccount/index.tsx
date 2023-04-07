import * as Styled from "./styles";
import StyledModal from "../../components/modal";
import { useState, useEffect } from "react";
import CustomTextField from "../../components/textfield";
import { TextFieldTypes } from "../../components/textfield/enum";
import { ButtonTypes } from "../../components/button/enum";
import CustomButton from "../../components/button";
import { deleteUser, getUserTokens } from "../../services";
import { IIDTokenDecode } from "./types";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const DeleteAccount: React.FC<{ activeRemove: boolean }> = ({ activeRemove }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(activeRemove);
  }, [activeRemove]);
  const handleClose = () => {
    setOpen(false);
  };

  const validateUser = (validEmail: string) => {
    return validEmail === email ? true : false;
  };

  const removeUser = async () => {
    const token = getUserTokens().IdToken;
    if (token) {
      const decode: IIDTokenDecode = jwtDecode(token);
      if (validateUser(decode.email)) {
        await deleteUser();
        navigate("/");
      }
    }
  };
  return (
    <div>
      {open ? (
        <StyledModal
          sx={Styled.miniStyle}
          open={true}
          handleClose={handleClose}
          title={"Delete your Account"}
          content={
            <CustomTextField
              type={TextFieldTypes.ModalTextField}
              placeHolder="please enter email to verify ownership"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
          }
          buttons={
            <Styled.ModalButtonWrapper>
              <CustomButton
                buttontype={ButtonTypes.ModalButton}
                title="Delete"
                onClick={async () => {
                  await removeUser();
                }}
              />
            </Styled.ModalButtonWrapper>
          }
        />
      ) : null}
    </div>
  );
};

export default DeleteAccount;
