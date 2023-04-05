import { ILoginCache, IUserTokens } from "./types";

export const setPendingConfirmUser = (email: string) => {
  localStorage.setItem("PendingConfirmUser", email);
};

export const getPendingConfirmUser = () => {
  return localStorage.getItem("PendingConfirmUser");
};

export const setUserTokens = (tokens: ILoginCache) => {
  localStorage.setItem("AccessToken", tokens.AccessToken);
  localStorage.setItem("IdToken", tokens.IdToken);
  localStorage.setItem("RefreshToken", tokens.RefreshToken);
};

export const getUserTokens = () => {
  const userTokens: IUserTokens = {
    AccessToken: localStorage.getItem("AccessToken"),
    IdToken: localStorage.getItem("IdToken"),
    RefreshToken: localStorage.getItem("RefreshToken"),
  };
  return userTokens;
};
