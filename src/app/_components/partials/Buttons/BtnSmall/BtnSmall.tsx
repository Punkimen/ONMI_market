import React, {FC} from "react";
import {IBtn} from "@/app/_types/buttons.types";
import s from './BtnSmall.module.scss';
import cn from 'classnames';
import Link from "next/link";

interface IBtnSmallProps extends IBtn {
  className?: string;
  typeBtn?: 'white' | 'blue'
}

export const BtnSmall: FC<IBtnSmallProps> = ({children, typeBtn, className, onClick, disabled, href}) => {
  return (
    <>
      {href ? <Link href={href} className={cn(s.btn, className, typeBtn === 'blue' && s.blue)}>{children}</Link> :
        <button className={cn(s.btn, className, typeBtn === 'blue' && s.blue)}
          disabled={disabled} {...onClick}>{children}</button>}
    </>
  );
};
