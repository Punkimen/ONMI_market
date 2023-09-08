import React, {FC, HTMLInputTypeAttribute} from "react";
import s from './Input.module.scss';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string,
  blockClass?: string,
  labelClass?: string,
  placeholder?: string;
  disabled?: boolean;
  className?: string,
}

export const Input: FC<InputProps> = ({label, blockClass, className, labelClass, ...props}) => {
  return (
    <div className={cn(s.block, blockClass)}>
      {label ? <label className={cn(s.label, labelClass)}>{label}</label> : null}
      <input className={cn(s.input, className)} {...props}/>
    </div>
  );
};
