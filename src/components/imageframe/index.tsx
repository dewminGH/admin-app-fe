import * as Styled from "./styles";
import { IImageProps } from "./types";

const ImageFrame: React.FC<IImageProps> = ({ width, height, src }) => {
  return <Styled.ImageContainer width={width} height={height} src={src} />;
};

export default ImageFrame;
