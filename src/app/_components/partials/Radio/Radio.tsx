import React, {FC} from 'react';
import s from './Radio.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
interface IRadioProps extends IBaseComponents {
  value: string,
  name: string,
  label?: string,
  checked?: boolean
}
export const Radio:FC<IRadioProps> = ({label,name,value,className,checked})=>{
  return (
    <label className={cn(s.radio, className)}>
      {label}
      <input type="radio" name={name} value={value} checked={checked}/>
      <div className={s.radio__indicator}></div>
    </label>
  );
};
