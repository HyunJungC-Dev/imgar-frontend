import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { StyledVideoProps } from './Video.type';

export const StyledVideo = styled.video.attrs<StyledVideoProps>(({ imageHeight, objectFit }) => {
  return {
    style: {
      height: pxToRem(imageHeight),
      objectFit: objectFit,
    },
  };
})<StyledVideoProps>`
  width: 100%;
`;
