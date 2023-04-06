import { ILoginCache } from "../cache/types";

export interface IAuthCredentials {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterResponse {
  data: { message: string; response: object };
}

export interface IConfirmResponse {
  message: string;
}

export interface IInitAuth {
  username: string;
  password: string;
}

export interface IInitAuthResponse {
  data: { message: string; response?: ILoginCache };
}

export interface IUserDataResponse {
  Username: string;
  UserAttributes: [
    {
      Name: string;
      Value: string;
    },
  ];
}

export interface IUserData {
  message: string;
  response?: IUserDataResponse;
}
