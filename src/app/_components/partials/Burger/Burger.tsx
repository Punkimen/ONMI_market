import React, {FC, useState} from "react";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import s from './Burger.module.scss';
import cn from "classnames";
import {IBaseComponents} from "@/app/_types/base.types";

interface IBurgerProps extends  IBaseComponents {
  active: boolean;
  setActive:()=>void;
}
export const Burger: FC<IBurgerProps> = (props) => {
  if (props.hide) return null;

  return (
    <BtnReset className={cn(s.burger, props.className, props.active && s.active)} onClick={()=>props.setActive(!props.active)}>
      <span></span>
      <span></span>
    </BtnReset>
  );
};
