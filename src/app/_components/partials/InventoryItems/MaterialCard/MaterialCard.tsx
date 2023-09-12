import React, {FC} from "react";
import s from './MaterialCard.module.scss';
import {IBaseComponents} from "@/app/_types/base.types";
import cn from 'classnames';
import Image from "next/image";

export interface IMaterialCardProps extends IBaseComponents {
  imgSrc: string;
  label: string;
  value: number;
}

export const MaterialCard: FC<IMaterialCardProps> = ({label, imgSrc, value, className, ...props}) => {
  return (
    <div className={cn(s.card, className)}>
      <Image src={imgSrc} className={s.img} alt="material icon"/>
      <div className={s.label}>{label}</div>
      <div className={s.value}>{value || 0}</div>
    </div>
  );
};
