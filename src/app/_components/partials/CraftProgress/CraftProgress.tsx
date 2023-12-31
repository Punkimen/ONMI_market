import React, {FC} from 'react';
import s from './CraftProgress.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";

interface ICraftProgressProps extends IBaseComponents {
  craftPoint: number,
  craftPointMax: number,
}

export const CraftProgress: FC<ICraftProgressProps> = ({craftPoint, craftPointMax, hide, className}) => {
  if (hide) return null;
  return (
    <div className={cn(s.progress, className)}>
      <div className={s.label}>Already crafted</div>
      <div className={s.points}>
        <span>{craftPoint}</span>
        <span>{craftPointMax}</span>
      </div>
    </div>
  );
};
