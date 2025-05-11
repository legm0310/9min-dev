import { ImgHTMLAttributes } from 'react';

export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img {...props} className={`${props.className}`} />
);
