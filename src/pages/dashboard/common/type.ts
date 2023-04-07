export interface INavButton {
  name: string;
  element: React.ReactNode;
  onClick?: () => void;
}

export interface IIDTokenDecode {
  profile: string;
  name: string;
  exp: string;
  email: string;
}

export const sx = { color: "#F150FF" };
