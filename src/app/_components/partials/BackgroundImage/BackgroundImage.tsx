import React from "react";
import Image, {StaticImageData} from 'next/image'
import {FC} from "react";

interface IBBackgroundImageProps {
  src: string | StaticImageData,
  alt: string
}

export const BackgroundImage: FC<IBBackgroundImageProps> = ({src, alt}) => {
  return (
    <Image
      alt={alt}
      src={src}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}
