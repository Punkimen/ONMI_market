import React from "react";
import {StaticImageData} from "next/image";

export interface IBaseComponents {
  hide?: boolean,
  className?: string,
  ref?: React.RefObject<HTMLInputElement>;
};

export interface ILink {
  title: string,
  href: string,
  onClick?: () => void,
}
