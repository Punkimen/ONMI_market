import React, {FC} from "react";
import {IBtn} from "@/app/_types/buttons.types";
import cn from 'classnames';
import s from './BtnReset.module.scss';

interface IBtnReset extends IBtn {
  className?: string;
}

export const BtnReset: FC<IBtnReset> = ({children, className, onClick, disabled, href}) => {
  return (
    <button className={cn(s.btn, className)}
      disabled={disabled} onClick={onClick}>{children}</button>
  );
};
