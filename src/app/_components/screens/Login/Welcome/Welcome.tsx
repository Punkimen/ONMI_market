"use client";

import React from "react";
import s from '../Login.module.scss';
import {BtnEnter} from "@/app/_components/partials/Buttons/BtnEnter/BtnEnter";
import apple from "@/../public/img/icons/apple_black.svg";
import email from "@/../public/img/icons/email.svg";
import cn from "classnames";

export const WelcomeLogin = () => {
  return (
    <>
      <div className={s.btns}>
        <BtnEnter className={cn(s.btn, 'opacity')} icon={apple} color={'white'}>Continue with Apple</BtnEnter>
        <BtnEnter className={cn(s.btn, 'opacity')} icon={email}>Continue with Email</BtnEnter>
      </div>
    </>
  );
};
