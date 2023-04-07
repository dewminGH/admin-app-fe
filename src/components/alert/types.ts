/* eslint-disable */
export enum IAlertTypes {
  Error = "Error",
  warning = "warning",
  Info = "Info",
  Success = "Success",
}
export interface IAlertProps {
  type: IAlertTypes;
  openAlert: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
}
