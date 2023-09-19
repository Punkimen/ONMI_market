import React, {FC, useState} from "react";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import s from './Burger.module.scss';
import cn from "classnames";
import {IBaseComponents} from "@/app/_types/base.types";

export const Burger: FC<IBaseComponents> = (props) => {
  const [active, setActive] = useState(false);
  console.log(props.hide);

  if (props.hide) return null;

  return (
    <BtnReset className={cn(s.burger, props.className, active && s.active)} onClick={() => setActive(!active)}>
      <span></span>
      <span></span>
    </BtnReset>
  );
};
