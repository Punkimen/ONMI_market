import React, {FC} from "react";
import s from './BtnBig.module.scss';
import cn from 'classnames';
import {IBtn} from "@/app/_types/buttons.types";
import Link from "next/link";
import {ChildrenType} from "@/app/_types/children.types";

interface IBtnBigProps extends IBtn {
  className?: string,
  color?: 'gray',
}

export const BtnBig: FC<IBtnBigProps> = ({children, className, color, href, onClick, disabled, ...props}) => {
  return (
    <>
      {href ? <Link href={href} className={cn(s.btn, color === 'gray' && s.gray, className)}>{children}</Link>
        : <button className={cn(s.btn, color === 'gray' && s.gray, className)} disabled={disabled}
          onClick={onClick} {...props}>{children}</button>
      }
    </>
  );
};
