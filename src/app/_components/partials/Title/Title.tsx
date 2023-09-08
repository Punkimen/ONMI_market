import {ChildrenType} from "@/app/_types/children.types";
import React, {FC} from "react";
import cn from "classnames";
import s from './Title.module.scss';

interface ITitleProps {
  children: ChildrenType,
  tag: 'h1' | 'h2' | 'h3' | 'h4',
  className?: string,
}

export const Title: FC<ITitleProps> = ({children, tag, className}) => {
  const TitleTag = tag;
  return <TitleTag className={cn(s.title, className)}>{children}</TitleTag>;
};
