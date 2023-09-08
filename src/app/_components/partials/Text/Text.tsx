import React, {FC} from 'react';
import s from './Text.module.scss';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";

interface ITextProps {
  children: ChildrenType,
  className?: string
}

export const Text: FC<ITextProps> = ({className, children}) => {
  return (
    <div className={cn(s.text, className)}>
      {children}
    </div>
  );
};
