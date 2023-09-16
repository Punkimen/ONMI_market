"use client";
import React, {FC, HTMLInputTypeAttribute, useEffect, useState} from "react";
import s from './Input.module.scss';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string,
  blockClass?: string,
  labelClass?: string,
  placeholder?: string;
  disabled?: boolean;
  className?: string,
  styletype?: "line",
  type?: 'password' | 'text',
}

export const Input: FC<InputProps> = ({label, blockClass, className,type, labelClass, ...props}) => {
  const [typeState, setTypeState] = useState(type);

  return (
    <div className={cn(s.block, blockClass)}>
      {label ? <label className={cn(s.label, labelClass)}>{label}</label> : null}
      <input type={typeState} className={cn(s.input, props.styletype ==='line' && s.line, className)} {...props}/>
      {type === 'password' && <BtnReset className={s.eye} onClick={()=>{setTypeState(typeState === 'password' ? "text" : "password");}}>
        <svg width="21" height="16" viewBox="0 0 21 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" >
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C6.70872 0 3.21717 1.96615 0.815013 5.28583C0.25506 6.05734 0 7.04843 0 7.99836C0 8.948 0.25496 9.9389 0.814654 10.7103C3.21683 14.0304 6.70853 15.9967 10.5 15.9967C14.2913 15.9967 17.7828 14.0306 20.185 10.7108C20.7449 9.93929 21 8.9482 21 7.99836C21 7.04863 20.7451 6.05773 20.1853 5.28633C17.7831 1.96633 14.2915 0 10.5 0ZM8.2575 8.00335C8.2575 6.76249 9.25914 5.76082 10.5 5.76082C11.7409 5.76082 12.7425 6.76249 12.7425 8.00335C12.7425 9.24421 11.7409 10.2459 10.5 10.2459C9.25914 10.2459 8.2575 9.24421 8.2575 8.00335ZM10.5 4.26581C8.43348 4.26581 6.76249 5.93681 6.76249 8.00335C6.76249 10.0699 8.43348 11.7409 10.5 11.7409C12.5666 11.7409 14.2375 10.0699 14.2375 8.00335C14.2375 5.93681 12.5666 4.26581 10.5 4.26581Z"
            fill="inherit"/>
        </svg>
      </BtnReset>}

    </div>
  );
};
