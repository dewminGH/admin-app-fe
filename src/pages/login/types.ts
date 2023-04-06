export interface ILoginLabelProps {
  width?: number;
  height?: number;
}

export interface IMetaTextStyleProps {
  fontWeight?: number;
  color?: string;
}

export interface IIDTokenDecode {
  profile: string;
  name: string;
  exp: string;
  email: string;
}
