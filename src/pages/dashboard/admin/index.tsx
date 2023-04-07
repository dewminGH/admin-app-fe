/* eslint-disable @typescript-eslint/no-floating-promises */
import * as Styled from "../common/styles";
import * as AdminStyled from "./styles";
import DashboardFrame from "../../common";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import TableFrame from "../../../components/table";
import CustomButton from "../../../components/button";
import StyledModal from "../../../components/modal";
import React, { useEffect, useState } from "react";
import { INavButton, sx } from "../common/type";
import { getShop, removeShopItem, saveShopItem } from "../../../services";
import { tableClNames, Style, miniStyle } from "./values";
import { setObjectToArray } from "../../../util";
import { ButtonTypes } from "../../../components/button/enum";
import { ContentRender } from "./content";

const NavItems: INavButton[] = [
  {
    name: "Home",
    element: <HomeOutlinedIcon sx={sx} />,
  },
  {
    name: "Users",
    element: <PersonSearchOutlinedIcon sx={sx} />,
  },
];

const AminDashBoard: React.FC = () => {
  const [tableData, setTableData] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(<div>no data</div>);
  const [itemID, setItemID] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");
  const [itemCountry, setItemCountry] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string>("");

  const fetchShop = () => {
    setLoading(true);
    return getShop().then(items => {
      if (items.length > 0) {
        const swap = { startIndex: 0, endIndex: 2 };
        const ItemsInOrder = setObjectToArray(items, swap);
        setTableData(ItemsInOrder);
        setLoading(false);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickSave = () => {
    setSave(true);
    setOpen(true);
  };
  const onClickRemove = () => {
    setSave(false);
    setOpen(true);
  };

  const onClickModal = () => {
    if (save) {
      const shopItem = {
        itemID,
        itemName,
        itemCountry,
        itemPrice,
        itemQuantity,
      };
      saveShopItem(shopItem);
    } else {
      removeShopItem(itemID);
    }
    setOpen(false);
    setTimeout(() => {
      setReload(true);
    }, 1000);
  };

  useEffect(() => {
    setContent(
      <>
        <TableFrame columNames={tableClNames} tableBodyData={tableData} loading={loading} />
        <AdminStyled.StyledButtonWrapper>
          {!loading ? (
            <>
              <CustomButton
                buttontype={ButtonTypes.ModalButton}
                sx={{ marginRight: "50px" }}
                title="Save/UpDate Product"
                onClick={onClickSave}
              />
              <CustomButton buttontype={ButtonTypes.ModalButton} title="Remove Product" onClick={onClickRemove} />
            </>
          ) : null}
        </AdminStyled.StyledButtonWrapper>
      </>,
    );
  }, [tableData, loading]);

  useEffect(() => {
    fetchShop();
  }, []);
  useEffect(() => {
    setReload(false);
    fetchShop();
  }, [reload]);

  return (
    <Styled.FrameWrapper>
      <DashboardFrame title="Admin DashBoard" navItems={NavItems} content={content} />
      {open ? (
        <StyledModal
          sx={save ? Style : miniStyle}
          open={true}
          handleClose={handleClose}
          title={save ? "Save to Shop" : "Remove from Shop"}
          content={
            <>
              {
                <ContentRender
                  save={save}
                  setItemID={setItemID}
                  setItemName={setItemName}
                  setItemPrice={setItemPrice}
                  setItemCountry={setItemCountry}
                  setItemQuantity={setItemQuantity}
                />
              }
            </>
          }
          buttons={
            <AdminStyled.ModalButtonWrapper>
              <CustomButton
                buttontype={ButtonTypes.ModalButton}
                title={save ? "save" : "remove"}
                onClick={onClickModal}
              />
            </AdminStyled.ModalButtonWrapper>
          }
        />
      ) : null}
    </Styled.FrameWrapper>
  );
};
export default AminDashBoard;
