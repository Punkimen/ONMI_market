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
  onClick?: () => void;
}

export const Navigation: FC<INavigationProps> = (props) => {
  const router = useRouter();
  if (props.hide) {
    return null;
  }
  ;
  return (
    <div className={cn(s.nav, 'container', props.className)}>
      <BtnBig color={"gray"} onClick={() => router.back()} className={cn(s.nav__btn, s.nav__btn_arrow, 'opacity')}>
        <Image className={s.arrow} src={arrow} alt={'arrow'}/>
      </BtnBig>
      <BtnBig className={cn(s.nav__btn, 'opacity')} data-delay='0.2' color={'white'} href={props.href}
        onClick={() => props.onClick && props.onClick()}>
        Continue
      </BtnBig>
    </div>
  );
};
