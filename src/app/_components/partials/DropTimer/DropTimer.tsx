import {IBaseComponents} from "@/app/_types/base.types";
import React, {FC} from "react";
import cn from "classnames";
import s from './DropTimer.module.scss';

interface IDropTimerProps extends IBaseComponents {
  label: string,
  startTime: string,
}

export const DropTimer: FC<IDropTimerProps> = ({className, hide, startTime, label, ...props}) => {

  if (hide) return null;
  return (
    <div className={cn(s.timer, className)} {...props}>
      <div className={s.timer__label}>
        {label}
      </div>
      <div className={s.timer__timer}>
        {startTime}
      </div>
    </div>
  );
};
