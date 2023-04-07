export interface INavButton {
  name: string;
  element: React.ReactNode;
}

export interface IIDTokenDecode {
  profile: string;
  name: string;
  exp: string;
  email: string;
}

export const sx = { color: "#F150FF" };
