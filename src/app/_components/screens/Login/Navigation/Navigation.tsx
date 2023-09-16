'use client';

import React, {FC} from "react";
import s from './Navigation.module.scss';
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import arrow from '@/../public/img/icons/arrow_link.svg';
import Image from "next/image";
import {IBaseComponents} from "@/app/_types/base.types";
import cn from "classnames";
import {useRouter} from "next/navigation";
interface INavigationProps extends IBaseComponents {
  hide?: boolean;
  href?: string;
}
export const Navigation:FC<INavigationProps> =(props)=>{
  const router = useRouter();
  if(props.hide) {
    return null;
  };
  return (
    <div className={cn(s.nav, props.className)}>
      <BtnBig color={"gray"} onClick={()=>router.back()} className={cn(s.nav__btn, s.nav__btn_arrow)}>
        <Image className={s.arrow} src={arrow} alt={'arrow'}/>
      </BtnBig>
      <BtnBig className={s.nav__btn} color={'white'} href={props.href}>
        Continue
      </BtnBig>
    </div>
  );
};
