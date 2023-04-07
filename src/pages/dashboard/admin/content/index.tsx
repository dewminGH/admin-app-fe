import CustomTextField from "../../../../components/textfield";
import { TextFieldTypes } from "../../../../components/textfield/enum";
import { IContentProp } from "./types";

export const ContentRender: React.FC<IContentProp> = ({
  save,
  setItemID,
  setItemName,
  setItemPrice,
  setItemCountry,
  setItemQuantity,
}) => {
  return (
    <>
      <CustomTextField
        type={TextFieldTypes.ModalTextField}
        placeHolder="Item ID"
        onChange={({ target }) => {
          setItemID(target.value);
        }}
      />
      {save ? (
        <>
          <CustomTextField
            type={TextFieldTypes.ModalTextField}
            placeHolder="Item Name"
            onChange={({ target }) => {
              setItemName && setItemName(target.value);
            }}
          />
          <CustomTextField
            type={TextFieldTypes.ModalTextField}
            placeHolder="Item Price"
            onChange={({ target }) => {
              setItemPrice && setItemPrice(target.value);
            }}
          />
          <CustomTextField
            type={TextFieldTypes.ModalTextField}
            placeHolder="Item Country"
            onChange={({ target }) => {
              setItemCountry && setItemCountry(target.value);
            }}
          />
          <CustomTextField
            type={TextFieldTypes.ModalTextField}
            placeHolder="Item Quantity"
            onChange={({ target }) => {
              setItemQuantity && setItemQuantity(target.value);
            }}
          />
        </>
      ) : null}
    </>
  );
};
