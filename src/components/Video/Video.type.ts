export interface StyledVideoProps {
  imageWidth?: string | number;
  imageHeight?: string | number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export interface VideoProps extends StyledVideoProps {
  imageId: string;
  className?: string;
  controls?: boolean;
  isLazyLoading?: boolean;
  inView?: boolean;
}
