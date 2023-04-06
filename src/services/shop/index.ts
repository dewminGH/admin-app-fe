import { Axios } from "../../util";
import { IShopData } from "./types";

export const getShop = async () => {
  const { data }: IShopData = await Axios.get("/getShop");
  if (data.response?.Items) {
    return data.response?.Items;
  }
  return [[], []];
};
