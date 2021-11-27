import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { VideoProps } from './Video.type';
import { StyledVideo } from './Video.styled';

export default function Video({
  className,
  controls,
  imageId,
  objectFit,
  imageHeight,
  inView = true,
}: VideoProps): ReactElement {
  const src = `https://i.imgur.com/${imageId}_lq.mp4`;

  return (
    inView && (
      <StyledVideo
        imageHeight={imageHeight}
        objectFit={objectFit}
        controls={controls}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      >
        <source data-src={!inView ? src : null} src={inView ? src : null} />
        <p>Sorry, your browser doesn&#39;t support HTML5 videos.</p>
      </StyledVideo>
    )
  );
}
