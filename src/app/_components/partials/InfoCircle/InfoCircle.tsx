import s from './InfoCircle.module.scss';
import cn from 'classnames';
import React, {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";
import {ChildrenType} from "@/app/_types/children.types";

interface IInfoCircleProps extends IBaseComponents {
  children: ChildrenType,
  show: boolean,
  x: number,
  y: number
}

export const InfoCircle: FC<IInfoCircleProps> = ({className, hide, x, y, children, show}) => {
  if (hide) return null;
  return (
    <div className={cn(s.circle, show && s.show, className)} style={{transform:`translate( calc(-50% + ${x}px), calc(-50% + ${y}px))`}}>
      {children}
    </div>
  );
};
