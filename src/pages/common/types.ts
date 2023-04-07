export interface IFrameProps {
  navItems: { name: string; element: React.ReactNode; onclick?: () => void }[];
  title?: string;
  content?: React.ReactNode;
  balance?: number;
}
