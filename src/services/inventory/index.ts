import { Axios } from "../../util";
import { getUserTokens } from "../cache";

export const getUserInventory = async () => {
  const params = {
    headers: {
      idtoken: getUserTokens().IdToken,
    },
  };
  const { data } = await Axios.get("/getCustomerInventory", params);
  if (data?.response) {
    return data.response.Items;
  }
  return [];
};
