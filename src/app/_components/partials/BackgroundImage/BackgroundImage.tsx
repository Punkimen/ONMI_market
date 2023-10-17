import React from "react";
import Image, {StaticImageData} from 'next/image';
import {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";

interface IBBackgroundImageProps  extends IBaseComponents{
  src: string | StaticImageData,
  alt: string
}

export const BackgroundImage: FC<IBBackgroundImageProps> = ({src, alt, className}) => {
  return (
    <Image
      className={className}
      alt={alt}
      src={src}
      quality={100}
      /*  fill
        sizes="100vw"*/
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        objectFit: 'cover',
        height: '100%'
      }}
    />
  );
};
