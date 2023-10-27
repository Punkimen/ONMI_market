import React, {FC, useState} from "react";
import {IBaseComponents} from "@/app/_types/base.types";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import cn from "classnames";
import s from './AlertCookie.module.scss';
export const AlertCookie:FC<IBaseComponents> = ({hide, className})=>{
  const [isHide, setIsHide] = useState(false);
  if(hide) return null;
  return <div className={cn(s.alert, 'opacity', isHide && s.hide, className)} data-delay={1}>
    <div className={s.label}>This site uses cookies</div>
    <BtnSmall className={s.btn} color={''} onClick={()=> {
      localStorage.setItem('acceptCookie', 'true');
      setIsHide(true);
    }}>OK</BtnSmall>
  </div>;
};
