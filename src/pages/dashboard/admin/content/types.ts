export interface IContentProp {
  save: boolean;
  setItemID: React.Dispatch<React.SetStateAction<string>>;
  setItemName?: React.Dispatch<React.SetStateAction<string>>;
  setItemPrice?: React.Dispatch<React.SetStateAction<string>>;
  setItemCountry?: React.Dispatch<React.SetStateAction<string>>;
  setItemQuantity?: React.Dispatch<React.SetStateAction<string>>;
}
