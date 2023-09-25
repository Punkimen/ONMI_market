"use client";

import React, {FC} from "react";
import {IBtn} from "@/app/_types/buttons.types";
import Link from "next/link";
import s from './BtnEnter.module.scss';
import cn from 'classnames';
import Image from "next/image";
import arrow from '@/../public/img/icons/arrow_link.svg';
import arrowBlack from '@/../public/img/icons/arrow_link_black.svg';
interface IBtnEnterProps extends IBtn{
  icon?: string;
  color?: "white" | "gray";
}

export const BtnEnter:FC<IBtnEnterProps> = ({icon,className,color, href, ...props})=>{
  return (
    <>
      {href ? <Link href={href} className={cn(s.btn, color === "white" && s.white, className)} {...props}>
        {icon && <Image className={s.icon} src={icon} alt={'icon'}/>}
        {props.children}
        <Image className={s.arrow} src={color === 'white' ? arrowBlack : arrow} alt={'icon'}/>
      </Link> :
        <button className={cn(s.btn,color === "white" && s.white, className)} onClick={props.onClick} {...props}>
          {icon && <Image className={s.icon} src={icon} alt={'icon'}/>}
          {props.children}
          <Image className={s.arrow} src={color === 'white' ? arrowBlack : arrow} alt={'icon'}/>
        </button>
      }
    </>
  );
};
