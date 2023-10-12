import React, {FC} from 'react';
import s from './Radio.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";

interface IRadioProps extends IBaseComponents {
  value: string | number,
  name: string,
  label?: string,
  checked?: boolean,
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Radio: FC<IRadioProps> = ({label, name, value,onChange, className, checked}) => {
  return (
    <label className={cn(s.radio, className)}>
      {label}
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange}/>
      <div className={s.radio__indicator}></div>
    </label>
  );
};
