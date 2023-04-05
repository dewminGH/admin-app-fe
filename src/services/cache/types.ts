export interface ILoginCache {
  AccessToken: string;
  IdToken: string;
  RefreshToken: string;
}

export interface IUserTokens {
  AccessToken: string | null;
  IdToken: string | null;
  RefreshToken: string | null;
}
