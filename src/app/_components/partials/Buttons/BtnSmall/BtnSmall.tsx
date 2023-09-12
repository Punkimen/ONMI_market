import React, {FC} from "react";
import {IBtn} from "@/app/_types/buttons.types";
import s from './BtnSmall.module.scss';
import cn from 'classnames';
import Link from "next/link";
import {IBaseComponents} from "@/app/_types/base.types";

interface IBtnSmallProps extends IBtn, IBaseComponents {
  className?: string;
  typeBtn?: 'white' | 'blue'
}

export const BtnSmall: FC<IBtnSmallProps> = ({
  children,
  typeBtn,
  className,
  onClick,
  disabled,
  href, ...props
}) => {

  if (props.hide) {
    return null;
  }

  return (
    <>
      {href ? <Link href={href} className={cn(className, s.btn, typeBtn === 'blue' && s.blue)}>{children}</Link> :
        <button className={cn(s.btn, className, typeBtn === 'blue' && s.blue)}
          disabled={disabled} onClick={onClick}>{children}</button>}
    </>
  );
};
