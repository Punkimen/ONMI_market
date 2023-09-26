import React from "react";

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
