export interface IShopData {
  data: {
    message: string;
    response?: {
      Items: { quantity: number; price: number; county: string; id: string; name: string }[];
    };
  };
}

export interface ISaveShopItem {
  itemID: string;
  itemName: string;
  itemCountry: string;
  itemPrice: string;
  itemQuantity: string;
}
