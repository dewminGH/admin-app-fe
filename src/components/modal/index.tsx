import * as React from "react";
import * as Styled from "./styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IModalProps } from "./types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  border: "3px solid #F150FF",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

const StyledModal: React.FC<IModalProps> = ({ title, content, buttons, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Styled.StyledContentWrapper> {content}</Styled.StyledContentWrapper>
        <Styled.StyledButtonsWrapper>{buttons}</Styled.StyledButtonsWrapper>
      </Box>
    </Modal>
  );
};

export default StyledModal;
