import React, {FC} from "react";
import s from './BtnBig.module.scss';
import cn from 'classnames';
import {IBtn} from "@/app/_types/buttons.types";
import Link from "next/link";
import {ChildrenType} from "@/app/_types/children.types";
import {IBaseComponents} from "@/app/_types/base.types";

interface IBtnBigProps extends IBtn, IBaseComponents {
  color?: 'gray' | 'white',
}

export const BtnBig: FC<IBtnBigProps> = ({children, hide, className, color, href, onClick, disabled, ...props}) => {
  if(hide) return null;
  return (
    <>
      {href ? <Link href={href} className={cn(s.btn, color === 'gray' && s.gray, color === 'white' && s.white, className)}>{children}</Link>
        : <button className={cn(s.btn, color === 'gray' && s.gray, color === 'white' && s.white, className)} disabled={disabled}
          onClick={onClick} {...props}>{children}</button>
      }
    </>
  );
};
