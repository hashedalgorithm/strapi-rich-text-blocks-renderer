import { TImageBlock } from '@/types';
import React from 'react';
import '@/styles/blocks/image-block.css';

type ImageBlockProps = Omit<TImageBlock, 'children'>;

const ImageBlock = ({ image }: ImageBlockProps) => {
  return <img src={image.url} alt={image.alternativeText} className="image" />;
};

export { ImageBlock, ImageBlockProps };
