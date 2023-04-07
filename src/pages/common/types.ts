export interface IFrameProps {
  navItems: { name: string; element: React.ReactNode }[];
  title?: string;
  content?: React.ReactNode;
  balance?: number;
}
