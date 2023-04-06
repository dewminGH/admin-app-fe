import { Axios } from "../../util";
import { getPendingConfirmUser, setPendingConfirmUser, setUserTokens } from "../cache";
import {
  IAuthCredentials,
  IConfirmResponse,
  IInitAuth,
  IInitAuthResponse,
  IRegisterResponse,
  IUserData,
} from "./types";

export const userRegister = async (userData: IAuthCredentials) => {
  const { data }: IRegisterResponse = await Axios.post("/register", {
    username: userData.email,
    password: userData.password,
    profile: "common",
    name: userData.name,
  });
  if (data.message === "authentication successful") setPendingConfirmUser(userData.email);
  return data;
};

export const userConfirmRegister = async (code: string) => {
  const data: IConfirmResponse = await Axios.post("/confirmRegister", {
    username: getPendingConfirmUser(),
    code: code,
  });
  return data?.message;
};

export const initAuth = async (userData: IInitAuth) => {
  const { data }: IInitAuthResponse = await Axios.post("/login", {
    username: userData.username,
    password: userData.password,
  });
  const { message, response } = data;
  if (response) {
    setUserTokens(response);
  }
  return message;
};

export const getUserData = async (accessToken: string | null) => {
  const { message, response }: IUserData = await Axios.post("/getUser", { accessToken });
  if (response) {
    return {
      message,
      response,
    };
  }
  return { message };
};
