import { Axios } from "../../util";
import { ISaveShopItem, IShopData } from "./types";

export const getShop = async () => {
  const { data }: IShopData = await Axios.get("/getShop");
  if (data.response?.Items) {
    return data.response?.Items;
  }
  return [[], []];
};

export const removeShopItem = async (id: string) => {
  await Axios.post("/removeItem", { id });
};

export const saveShopItem = async (itemData: ISaveShopItem) => {
  const params = {
    id: itemData.itemID,
    name: itemData.itemName,
    country: itemData.itemCountry,
    price: itemData.itemPrice,
    quantity: itemData.itemQuantity,
  };
  await Axios.post("/saveItem", params);
};
