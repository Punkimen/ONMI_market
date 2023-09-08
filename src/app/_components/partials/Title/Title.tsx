import {ChildrenType} from "@/app/_types/children.types";
import React, {FC} from "react";
import cn from "classnames";
import s from './Title.module.scss';

interface ITitleProps {
  children: ChildrenType,
  tag: 'h1' | 'h2' | 'h3' | 'h4',
  className?: string,
  align?: 'left'|'right'
}

export const Title: FC<ITitleProps> = ({children, tag, className,align}) => {
  const TitleTag = tag;
  return <TitleTag className={cn(s.title, className, align === "left" && s.left, align === "right" && s.right)}>{children}</TitleTag>;
};
